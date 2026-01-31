type Props = {
  /** HTML content that may contain entity references (as <a> tags or plain text) */
  html: string;
  /** Optional: CSS class for the container */
  className?: string;
  /** Optional: element type for the container */
  as?: "div" | "p" | "span";
};

/**
 * Convert simple markdown to HTML
 */
function markdownToHtml(text: string): string {
  let html = text;

  // Convert **bold** to <strong>
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Convert *italic* to <em>
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Convert markdown-style lists (lines starting with -)
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');

  // Wrap consecutive <li> elements in <ul>
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);

  // Convert double newlines to paragraph breaks
  html = html.replace(/\n\n+/g, '</p><p>');

  // Convert single newlines to <br> (but not inside lists)
  html = html.replace(/(?<!<\/li>)\n(?!<)/g, '<br>');

  // Wrap in paragraph tags if not already wrapped
  if (!html.startsWith('<p>') && !html.startsWith('<ul>') && !html.startsWith('<table')) {
    html = `<p>${html}</p>`;
  }

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}

/**
 * Renders HTML content with plain anchor links (underlined)
 */
export function EntityContent({ html, className, as: Element = "div" }: Props) {
  // Convert markdown to HTML if content contains markdown syntax
  let processedHtml = html;

  // Only convert if it looks like markdown (has ** or starts with -)
  if (html.includes('**') || /^- /m.test(html)) {
    processedHtml = markdownToHtml(html);
  }

  // Add underline class to all anchor tags
  processedHtml = processedHtml.replace(/<a\s+href="/g, '<a class="underline" href="');

  return (
    <Element
      className={className}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
}

/**
 * Simple wrapper - no longer provides modal functionality
 */
export function EntityContentContainer({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
