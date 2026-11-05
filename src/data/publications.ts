// Extra info for entries in papers.bib, keyed by BibTeX key.
// venue: short label shown on the badge (overrides what's derived from the .bib).
// selected: shown on the home page.
// note: small extra tag, e.g. "Oral".
export interface PubExtra {
  venue?: string;
  selected?: boolean;
  note?: string;
}

export const pubExtras: Record<string, PubExtra> = {
  'zhao2026discoveringcausallyvalidatingemotionsensitive': { venue: 'ACL 2026', selected: true },
  'zhao2025findingculturesensitiveneuronsvisionlanguage': { venue: 'EACL 2026', selected: true },
  'zhao2025unwrapping': { venue: 'ACL 2025 SRW' },
  'zhao-etal-2024-electoral': { venue: 'EMNLP 2024', selected: true },
  'xiong-etal-2024-watch': { venue: 'EMNLP 2024' },
  'song-etal-2024-agentbank': { venue: 'EMNLP 2024 Findings' },
  'zhao-etal-2024-measuring': { venue: 'KnowLLM @ ACL 2024', note: 'Oral' },
  'liu2024surveyhallucinationlargevisionlanguage': { venue: 'arXiv 2024' },
  'Wang_Zhao_Peng_2024': { venue: 'AAAI 2024' },
  'zhao-etal-2023-orchid': { venue: 'EMNLP 2023', selected: true },
  'wang-etal-2023-m3seg': { venue: 'EMNLP 2023' },
  'wang-etal-2023-prose': { venue: 'EMNLP 2023' },
};
