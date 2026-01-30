"use client";

import { useMemo } from "react";
import { EntityLink } from "./EntityLink";
import { findEntityByName, findEntityBySlug, isKnownEntity } from "@/lib/entity-lookup";

type Props = {
  /** HTML content that may contain entity references (as <a> tags or plain text) */
  html: string;
  /** Optional: CSS class for the container */
  className?: string;
  /** Optional: element type for the container */
  as?: "div" | "p" | "span";
};

/**
 * Renders HTML content with entity links enhanced with tooltips/modals
 *
 * Handles two cases:
 * 1. Existing <a href="/path/to/entity/"> links → converts to EntityLink
 * 2. Plain text entity names → wraps with EntityLink (optional, controlled by data)
 */
export function EntityContent({ html, className, as: Element = "div" }: Props) {
  const processedContent = useMemo(() => {
    return processHtmlWithEntityLinks(html);
  }, [html]);

  return (
    <Element
      className={className}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}

/**
 * Process HTML to add data attributes that the client-side JS can enhance
 * This is a server-safe approach that doesn't require parsing React components
 */
function processHtmlWithEntityLinks(html: string): string {
  // Pattern to match internal links like <a href="/characters/classes/rogue-5e/">Rogue</a>
  const linkPattern = /<a\s+href="(\/[^"]+)"[^>]*>([^<]+)<\/a>/gi;

  return html.replace(linkPattern, (match, href, text) => {
    // Extract slug from href
    const slugMatch = href.match(/\/([^/]+)\/?$/);
    if (!slugMatch) return match;

    const slug = slugMatch[1];
    const entity = findEntityBySlug(slug);

    if (entity) {
      // Replace with a span that has data attributes for client-side enhancement
      return `<span class="entity-link" data-entity-slug="${slug}" data-entity-name="${entity.name}">${text}</span>`;
    }

    // If not a known entity, keep the original link
    return match;
  });
}

/**
 * Client component that hydrates entity-link spans with interactive behavior
 * This should wrap content areas that use EntityContent
 */
export function EntityContentContainer({ children }: { children: React.ReactNode }) {
  return <EntityContentHydrator>{children}</EntityContentHydrator>;
}

/**
 * Hydrates static entity-link spans with interactive tooltips/modals
 */
function EntityContentHydrator({ children }: { children: React.ReactNode }) {
  // This component uses event delegation to handle all entity links
  // within its container without needing to render each as a React component

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("entity-link") && target.dataset.entitySlug) {
      e.preventDefault();
      // Dispatch custom event that EntityLinkManager will handle
      const event = new CustomEvent("entity-link-click", {
        detail: {
          slug: target.dataset.entitySlug,
          name: target.dataset.entityName,
          rect: target.getBoundingClientRect(),
        },
        bubbles: true,
      });
      target.dispatchEvent(event);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("entity-link") && target.dataset.entitySlug) {
      // Dispatch custom event for tooltip
      const event = new CustomEvent("entity-link-hover", {
        detail: {
          slug: target.dataset.entitySlug,
          name: target.dataset.entityName,
          rect: target.getBoundingClientRect(),
        },
        bubbles: true,
      });
      target.dispatchEvent(event);
    }
  };

  return (
    <div onClick={handleClick} onMouseOver={handleMouseEnter}>
      {children}
    </div>
  );
}
