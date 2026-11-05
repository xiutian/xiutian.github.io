// Extra info for entries in papers.bib, keyed by BibTeX key.
//
// Venue badges are shortened automatically from the .bib (e.g. "EMNLP 2024",
// "EACL 2026", "IJCNLP-AACL 2026 Findings"), so most papers need nothing here.
//
// selected: show the paper in "Selected papers" on the home page.
// venue:    override the badge text when the automatic label is wrong.
// note:     small extra tag, e.g. "Oral" (picked up automatically when the
//           booktitle contains "(Oral)" or "(Oral Presentation)").
export interface PubExtra {
  venue?: string;
  selected?: boolean;
  note?: string;
}

export const pubExtras: Record<string, PubExtra> = {
  'zhao-etal-2026-discovering': { selected: true },
  'zhao-etal-2026-finding': { selected: true },
  'zhao-etal-2024-electoral': { selected: true },
  'zhao-etal-2023-orchid': { selected: true },
};
