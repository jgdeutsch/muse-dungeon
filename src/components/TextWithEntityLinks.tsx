"use client";

import { useMemo } from "react";
import { EntityLink } from "./EntityLink";
import { findEntityByName, getAllEntityNames } from "@/lib/entity-lookup";

type Props = {
  /** Plain text that may contain entity names */
  text: string;
  /** Optional: element type for the container */
  as?: "p" | "span" | "div";
  /** Optional: CSS class for the container */
  className?: string;
};

/**
 * Renders plain text with entity names automatically linked
 * Scans the text for known entity names and wraps them with EntityLink
 */
export function TextWithEntityLinks({ text, as: Element = "span", className }: Props) {
  const content = useMemo(() => {
    return processTextWithEntityLinks(text);
  }, [text]);

  return <Element className={className}>{content}</Element>;
}

// Cache the sorted entity names (longest first to match "Magic Missile" before "Magic")
let sortedEntityNames: string[] | null = null;

function getSortedEntityNames(): string[] {
  if (!sortedEntityNames) {
    const names = getAllEntityNames();
    // Sort by length descending to match longer names first
    sortedEntityNames = names.sort((a, b) => b.length - a.length);
  }
  return sortedEntityNames;
}

/**
 * Process text to find and wrap entity names with EntityLink components
 */
function processTextWithEntityLinks(text: string): React.ReactNode[] {
  const entityNames = getSortedEntityNames();
  const result: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  while (remaining.length > 0) {
    let earliestMatch: { name: string; index: number; entity: ReturnType<typeof findEntityByName> } | null = null;

    // Find the earliest occurring entity name in the remaining text
    for (const name of entityNames) {
      // Skip very short names to avoid false positives (like "Orc" matching "force")
      if (name.length < 3) continue;

      // Use word boundary matching to avoid partial matches
      const regex = new RegExp(`\\b${escapeRegex(name)}\\b`, 'i');
      const match = remaining.match(regex);

      if (match && match.index !== undefined) {
        if (!earliestMatch || match.index < earliestMatch.index) {
          const entity = findEntityByName(name);
          if (entity) {
            earliestMatch = { name: match[0], index: match.index, entity };
          }
        }
      }
    }

    if (earliestMatch) {
      // Add text before the match
      if (earliestMatch.index > 0) {
        result.push(remaining.slice(0, earliestMatch.index));
      }

      // Add the EntityLink (entity is guaranteed non-null here since we check above)
      result.push(
        <EntityLink key={keyIndex++} name={earliestMatch.name} entity={earliestMatch.entity!}>
          {earliestMatch.name}
        </EntityLink>
      );

      // Continue with the rest of the text
      remaining = remaining.slice(earliestMatch.index + earliestMatch.name.length);
    } else {
      // No more matches, add the remaining text
      result.push(remaining);
      break;
    }
  }

  return result;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
