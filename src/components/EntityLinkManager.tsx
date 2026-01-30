"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { findEntityBySlug, type EntityData } from "@/lib/entity-lookup";
import { EntityTooltip } from "./EntityTooltip";
import { EntityModal } from "./EntityModal";

/**
 * Global manager for entity link tooltips and modals
 * Place this once in your layout to handle all entity links via event delegation
 */
export function EntityLinkManager() {
  const [tooltipState, setTooltipState] = useState<{
    entity: EntityData;
    rect: DOMRect;
  } | null>(null);

  const [modalEntity, setModalEntity] = useState<EntityData | null>(null);
  const [hoverTimeout, setHoverTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Handle hover events from entity links
  useEffect(() => {
    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent<{
        slug: string;
        name: string;
        rect: DOMRect;
      }>;

      const entity = findEntityBySlug(customEvent.detail.slug);
      if (!entity) return;

      // Clear any existing timeout
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }

      // Delay showing tooltip
      const timeout = setTimeout(() => {
        setTooltipState({
          entity,
          rect: customEvent.detail.rect,
        });
      }, 300);

      setHoverTimeoutId(timeout);
    };

    const handleMouseLeave = () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeoutId(null);
      }
      // Small delay before hiding
      setTimeout(() => {
        setTooltipState(null);
      }, 100);
    };

    document.addEventListener("entity-link-hover", handleHover);
    document.addEventListener("entity-link-leave", handleMouseLeave);

    return () => {
      document.removeEventListener("entity-link-hover", handleHover);
      document.removeEventListener("entity-link-leave", handleMouseLeave);
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  // Handle click events from entity links
  useEffect(() => {
    const handleClick = (e: Event) => {
      const customEvent = e as CustomEvent<{
        slug: string;
        name: string;
        rect: DOMRect;
      }>;

      const entity = findEntityBySlug(customEvent.detail.slug);
      if (!entity) return;

      // Show tooltip on click
      setTooltipState({
        entity,
        rect: customEvent.detail.rect,
      });
    };

    document.addEventListener("entity-link-click", handleClick);
    return () => document.removeEventListener("entity-link-click", handleClick);
  }, []);

  const handleShowMore = useCallback(() => {
    if (tooltipState) {
      setModalEntity(tooltipState.entity);
      setTooltipState(null);
    }
  }, [tooltipState]);

  const handleCloseTooltip = useCallback(() => {
    setTooltipState(null);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalEntity(null);
  }, []);

  // Don't render anything server-side
  if (typeof window === "undefined") return null;

  return (
    <>
      {tooltipState &&
        createPortal(
          <EntityTooltip
            entity={tooltipState.entity}
            anchorRect={tooltipState.rect}
            onShowMore={handleShowMore}
            onClose={handleCloseTooltip}
          />,
          document.body
        )}

      {modalEntity &&
        createPortal(
          <EntityModal entity={modalEntity} onClose={handleCloseModal} />,
          document.body
        )}
    </>
  );
}
