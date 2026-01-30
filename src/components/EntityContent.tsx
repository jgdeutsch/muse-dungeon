type Props = {
  /** HTML content that may contain entity references (as <a> tags or plain text) */
  html: string;
  /** Optional: CSS class for the container */
  className?: string;
  /** Optional: element type for the container */
  as?: "div" | "p" | "span";
};

/**
 * Renders HTML content with plain anchor links (underlined)
 */
export function EntityContent({ html, className, as: Element = "div" }: Props) {
  // Add underline class to all anchor tags
  const processedHtml = html.replace(/<a\s+href="/g, '<a class="underline" href="');

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
