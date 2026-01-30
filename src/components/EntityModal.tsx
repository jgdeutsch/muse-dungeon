"use client";

import { useEffect } from "react";
import type { EntityData } from "@/lib/entity-lookup";

type Props = {
  entity: EntityData;
  onClose: () => void;
};

export function EntityModal({ entity, onClose }: Props) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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

  // Build stats grid based on entity type
  const stats: { label: string; value: string }[] = [];
  if (entity.details) {
    const d = entity.details;
    if (d.level) stats.push({ label: "Level", value: d.level });
    if (d.school) stats.push({ label: "School", value: d.school });
    if (d.castingTime) stats.push({ label: "Casting Time", value: d.castingTime });
    if (d.range) stats.push({ label: "Range", value: d.range });
    if (d.components) stats.push({ label: "Components", value: d.components });
    if (d.duration) stats.push({ label: "Duration", value: d.duration });
    if (d.hitDie) stats.push({ label: "Hit Die", value: d.hitDie });
    if (d.primaryAbility) stats.push({ label: "Primary Ability", value: d.primaryAbility });
    if (d.challengeRating) stats.push({ label: "Challenge Rating", value: d.challengeRating });
    if (d.type) stats.push({ label: "Type", value: d.type });
    if (d.size) stats.push({ label: "Size", value: d.size });
    if (d.speed) stats.push({ label: "Speed", value: d.speed });
    if (d.rarity) stats.push({ label: "Rarity", value: d.rarity });
    if (d.attunement !== undefined) stats.push({ label: "Attunement", value: d.attunement ? "Required" : "Not required" });
    if (d.classes && d.classes.length > 0) stats.push({ label: "Classes", value: d.classes.join(", ") });
  }

  return (
    <>
      {/* Backdrop */}
      <div className="entity-modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="entity-modal" role="dialog" aria-labelledby="entity-modal-title">
        {/* Header */}
        <div className="entity-modal-header">
          <div className="entity-modal-title">
            <span id="entity-modal-title" className="entity-modal-name">{entity.name}</span>
            <span className="entity-tooltip-type">{typeLabel[entity.type] || entity.type}</span>
          </div>
          <button className="entity-modal-close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l8 8M14 6l-8 8" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="entity-modal-body">
          {/* Stats grid */}
          {stats.length > 0 && (
            <div className="entity-modal-section">
              <div className="entity-modal-stats">
                {stats.map((stat, i) => (
                  <div key={i} className="entity-modal-stat">
                    <div className="entity-modal-stat-label">{stat.label}</div>
                    <div className="entity-modal-stat-value">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          {entity.fullDescription && (
            <div className="entity-modal-section">
              <div className="entity-modal-label">Description</div>
              <div
                className="entity-modal-text"
                dangerouslySetInnerHTML={{ __html: entity.fullDescription }}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="entity-modal-footer">
          <a href={entity.url} className="entity-modal-link">
            View Full Page
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 12l4-4-4-4" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
