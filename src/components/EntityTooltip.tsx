"use client";

import { useState, useRef, useEffect } from "react";
import type { EntityData } from "@/lib/entity-lookup";

type Props = {
  entity: EntityData;
  onShowMore: () => void;
  onClose: () => void;
  anchorRect: DOMRect;
};

export function EntityTooltip({ entity, onShowMore, onClose, anchorRect }: Props) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Position tooltip above or below anchor based on available space
  useEffect(() => {
    if (!tooltipRef.current) return;

    const tooltip = tooltipRef.current;
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    let top: number;
    let left: number;

    // Prefer showing below the anchor
    const spaceBelow = viewportHeight - anchorRect.bottom;
    const spaceAbove = anchorRect.top;

    if (spaceBelow >= tooltipRect.height + 8 || spaceBelow >= spaceAbove) {
      // Show below
      top = anchorRect.bottom + 8;
    } else {
      // Show above
      top = anchorRect.top - tooltipRect.height - 8;
    }

    // Center horizontally, but keep within viewport
    left = anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2;
    left = Math.max(8, Math.min(left, viewportWidth - tooltipRect.width - 8));

    // Ensure not above viewport
    top = Math.max(8, top);

    setPosition({ top, left });
  }, [anchorRect]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    // Small delay to prevent immediate close from the triggering click
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  const typeLabel: Record<string, string> = {
    spell: "Spell",
    class: "Class",
    race: "Race",
    monster: "Monster",
    equipment: "Equipment",
    "magic-item": "Magic Item",
    condition: "Condition",
    rule: "Rule",
    feat: "Feat",
  };

  // Get relevant details to display
  const detailItems: string[] = [];
  if (entity.details) {
    if (entity.details.level) detailItems.push(entity.details.level);
    if (entity.details.school) detailItems.push(entity.details.school);
    if (entity.details.castingTime) detailItems.push(entity.details.castingTime);
    if (entity.details.hitDie) detailItems.push(entity.details.hitDie);
    if (entity.details.primaryAbility) detailItems.push(entity.details.primaryAbility);
    if (entity.details.challengeRating) detailItems.push(`CR ${entity.details.challengeRating}`);
    if (entity.details.type) detailItems.push(entity.details.type);
    if (entity.details.rarity) detailItems.push(entity.details.rarity);
    if (entity.details.size) detailItems.push(entity.details.size);
    if (entity.details.speed) detailItems.push(entity.details.speed);
  }

  return (
    <div
      ref={tooltipRef}
      className="entity-tooltip"
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
      }}
      role="tooltip"
    >
      <div className="entity-tooltip-header">
        <span className="entity-tooltip-name">{entity.name}</span>
        <span className="entity-tooltip-type">{typeLabel[entity.type] || entity.type}</span>
      </div>

      <div className="entity-tooltip-desc">{entity.shortDescription}</div>

      {detailItems.length > 0 && (
        <div className="entity-tooltip-details">
          {detailItems.slice(0, 4).map((item, i) => (
            <span key={i} className="entity-tooltip-detail">{item}</span>
          ))}
        </div>
      )}

      <div className="entity-tooltip-actions">
        <button
          className="entity-tooltip-btn entity-tooltip-btn-secondary"
          onClick={onShowMore}
        >
          More Details
        </button>
        <a
          href={entity.url}
          className="entity-tooltip-btn entity-tooltip-btn-primary"
        >
          Go to Page
        </a>
      </div>
    </div>
  );
}
