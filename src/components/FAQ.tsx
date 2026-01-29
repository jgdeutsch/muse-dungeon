"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section id="faq" className="py-8 border-t border-[var(--border)]">
      <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-[var(--border)] rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-4 py-3 text-left flex items-center justify-between gap-4 hover:bg-[var(--bg-hover)] transition-colors"
            >
              <span className="font-medium text-[var(--text)]">
                {item.question}
              </span>
              <span
                className={`text-[var(--text-dim)] transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-sm text-[var(--text-dim)] leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
