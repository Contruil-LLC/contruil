"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="text-sm px-4 py-2 border border-white/20 text-brand-muted rounded-md hover:bg-white/5 hover:text-white transition-colors print:hidden"
    >
      Print / Save as PDF
    </button>
  );
}
