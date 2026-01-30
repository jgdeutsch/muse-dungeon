// Script to audit all internal links across the site
// Run with: npx ts-node scripts/audit-internal-links.ts

import * as fs from "fs";
import * as path from "path";

// Read all TypeScript files in src/data
const dataDir = path.join(__dirname, "../src/data");
const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".ts"));

// Regex to find href links
const hrefRegex = /href="(\/[^"]+)"/g;

// Collect all internal links found
const linksFound: { file: string; link: string; line: number }[] = [];

for (const file of files) {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  lines.forEach((line, idx) => {
    let match;
    while ((match = hrefRegex.exec(line)) !== null) {
      linksFound.push({
        file,
        link: match[1],
        line: idx + 1
      });
    }
  });
}

console.log(`Found ${linksFound.length} internal links in data files`);

// Load valid URLs
let validUrls: string[] = [];
try {
  validUrls = JSON.parse(fs.readFileSync("scripts/valid-urls.json", "utf-8"));
} catch {
  console.error("Run generate-valid-urls.ts first to create valid-urls.json");
  process.exit(1);
}

const validUrlSet = new Set(validUrls);

// Also add versions without trailing slash for matching
for (const url of validUrls) {
  if (url.endsWith("/")) {
    validUrlSet.add(url.slice(0, -1));
  } else {
    validUrlSet.add(url + "/");
  }
}

// Check each link
const brokenLinks: typeof linksFound = [];
const goodLinks: typeof linksFound = [];

for (const item of linksFound) {
  // Normalize the link (ensure trailing slash for comparison)
  const normalizedLink = item.link.endsWith("/") ? item.link : item.link + "/";

  if (validUrlSet.has(normalizedLink) || validUrlSet.has(item.link)) {
    goodLinks.push(item);
  } else {
    brokenLinks.push(item);
  }
}

console.log(`\nGood links: ${goodLinks.length}`);
console.log(`Broken links: ${brokenLinks.length}`);

if (brokenLinks.length > 0) {
  console.log("\n=== BROKEN LINKS ===\n");
  for (const item of brokenLinks) {
    console.log(`${item.file}:${item.line} -> ${item.link}`);
  }

  // Group by link to see unique broken URLs
  const uniqueBroken = new Map<string, string[]>();
  for (const item of brokenLinks) {
    if (!uniqueBroken.has(item.link)) {
      uniqueBroken.set(item.link, []);
    }
    uniqueBroken.get(item.link)!.push(`${item.file}:${item.line}`);
  }

  console.log("\n=== UNIQUE BROKEN URLS ===\n");
  for (const [url, locations] of uniqueBroken) {
    console.log(`${url}`);
    console.log(`  Found in: ${locations.join(", ")}`);
  }

  // Write broken links to file
  fs.writeFileSync(
    "scripts/broken-links.json",
    JSON.stringify(brokenLinks, null, 2)
  );
  console.log("\nWritten to scripts/broken-links.json");
}
