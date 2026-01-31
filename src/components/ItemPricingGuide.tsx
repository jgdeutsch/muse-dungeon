"use client";

import { useState } from "react";

// Magic item pricing by rarity (from DMG/Xanathar's)
const RARITY_PRICING: Record<string, { min: number; max: number; avg: number; craftDays: number; craftCost: number }> = {
  common: { min: 50, max: 100, avg: 75, craftDays: 4, craftCost: 25 },
  uncommon: { min: 101, max: 500, avg: 300, craftDays: 20, craftCost: 200 },
  rare: { min: 501, max: 5000, avg: 2750, craftDays: 200, craftCost: 2000 },
  "very rare": { min: 5001, max: 50000, avg: 27500, craftDays: 2000, craftCost: 20000 },
  legendary: { min: 50001, max: 500000, avg: 275000, craftDays: 20000, craftCost: 100000 },
  artifact: { min: 500001, max: 1000000, avg: 750000, craftDays: 0, craftCost: 0 },
};

// Consumable pricing (typically half of permanent items)
const CONSUMABLE_MULTIPLIER = 0.5;

// Pricing for mundane items by category
const MUNDANE_CATEGORIES: Record<string, { examples: string[]; priceRange: string }> = {
  weapons: {
    examples: ["Longsword (15 gp)", "Greataxe (30 gp)", "Crossbow, heavy (50 gp)"],
    priceRange: "1 gp - 75 gp",
  },
  armor: {
    examples: ["Leather (10 gp)", "Chain mail (75 gp)", "Plate (1,500 gp)"],
    priceRange: "5 gp - 1,500 gp",
  },
  adventuring: {
    examples: ["Rope, 50 ft (1 gp)", "Backpack (2 gp)", "Lantern (10 gp)"],
    priceRange: "1 cp - 50 gp",
  },
  services: {
    examples: ["Inn stay/night (2 sp - 2 gp)", "Hireling/day (2 sp)", "Spellcasting (varies)"],
    priceRange: "Varies widely",
  },
};

export function ItemPricingGuide({ itemName, rarity }: { itemName?: string; rarity?: string }) {
  const [open, setOpen] = useState(false);
  const [selectedRarity, setSelectedRarity] = useState<string>(
    rarity?.toLowerCase() || "uncommon"
  );
  const [isConsumable, setIsConsumable] = useState(false);

  const pricing = RARITY_PRICING[selectedRarity];
  const adjustedPricing = pricing ? {
    min: Math.floor(pricing.min * (isConsumable ? CONSUMABLE_MULTIPLIER : 1)),
    max: Math.floor(pricing.max * (isConsumable ? CONSUMABLE_MULTIPLIER : 1)),
    avg: Math.floor(pricing.avg * (isConsumable ? CONSUMABLE_MULTIPLIER : 1)),
    craftDays: pricing.craftDays,
    craftCost: pricing.craftCost,
  } : null;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--gold)] text-black hover:brightness-110 transition-all cursor-pointer"
        style={{ backgroundColor: "#d4af37" }}
      >
        Item Pricing Guide
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-xl max-w-md w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-['Cinzel'] text-lg font-bold" style={{ color: "#d4af37" }}>
            Item Pricing Guide
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Item Info */}
        {itemName && (
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-3 mb-4">
            <div className="text-sm font-semibold">{itemName}</div>
            {rarity && (
              <div className="text-xs text-[var(--text-dim)] capitalize">{rarity} Magic Item</div>
            )}
          </div>
        )}

        {/* Rarity Selector */}
        <div className="mb-4">
          <label className="block text-xs text-[var(--text-dim)] mb-1">Rarity</label>
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm capitalize"
          >
            {Object.keys(RARITY_PRICING).map((r) => (
              <option key={r} value={r} className="capitalize">
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Consumable Toggle */}
        <label className="flex items-center gap-2 mb-5 cursor-pointer">
          <input
            type="checkbox"
            checked={isConsumable}
            onChange={(e) => setIsConsumable(e.target.checked)}
            className="w-4 h-4 rounded border-[var(--border)]"
          />
          <span className="text-sm">Consumable item (potion, scroll, etc.)</span>
        </label>

        {/* Pricing Display */}
        {adjustedPricing && (
          <>
            <div className="rounded-lg p-4 mb-4 border" style={{ borderColor: "#d4af37", backgroundColor: "rgba(212, 175, 55, 0.1)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#d4af37" }}>
                Market Value
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-xs text-[var(--text-dim)]">Minimum</div>
                  <div className="text-lg font-bold">{adjustedPricing.min.toLocaleString()} gp</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--text-dim)]">Typical</div>
                  <div className="text-xl font-bold" style={{ color: "#d4af37" }}>
                    {adjustedPricing.avg.toLocaleString()} gp
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[var(--text-dim)]">Maximum</div>
                  <div className="text-lg font-bold">{adjustedPricing.max.toLocaleString()} gp</div>
                </div>
              </div>
            </div>

            {/* Crafting Info */}
            {selectedRarity !== "artifact" && (
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-4 mb-4">
                <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-3">
                  Crafting (Xanathar's Rules)
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-xs text-[var(--text-dim)]">Workweeks</div>
                    <div className="font-semibold">{Math.ceil(adjustedPricing.craftDays / 5)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-dim)]">Material Cost</div>
                    <div className="font-semibold">{adjustedPricing.craftCost.toLocaleString()} gp</div>
                  </div>
                </div>
                <div className="text-xs text-[var(--text-dim)] mt-2 pt-2 border-t border-[var(--border)]">
                  Requires appropriate tool proficiency and spell components
                </div>
              </div>
            )}
          </>
        )}

        {/* Quick Reference */}
        <div className="border-t border-[var(--border)] pt-4">
          <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-3">
            Quick Reference by Rarity
          </div>
          <div className="space-y-2 text-xs">
            {Object.entries(RARITY_PRICING).slice(0, 5).map(([r, p]) => (
              <div key={r} className="flex justify-between">
                <span className="capitalize">{r}</span>
                <span className="text-[var(--text-dim)]">{p.min.toLocaleString()} - {p.max.toLocaleString()} gp</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="text-xs text-[var(--text-dim)] mt-4 pt-4 border-t border-[var(--border)]">
          <strong>DM Tip:</strong> Prices vary based on economy, seller motivation, and item demand. Use these as guidelines, not strict rules.
        </div>
      </div>
    </div>
  );
}
