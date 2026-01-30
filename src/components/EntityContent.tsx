type Props = {
  /** HTML content that may contain entity references (as <a> tags or plain text) */
  html: string;
  /** Optional: CSS class for the container */
  className?: string;
  /** Optional: element type for the container */
  as?: "div" | "p" | "span";
};

/**
 * Renders HTML content with plain anchor links
 */
export function EntityContent({ html, className, as: Element = "div" }: Props) {
  return (
    <Element
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/**
 * Simple wrapper - no longer provides modal functionality
 */
export function EntityContentContainer({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
