// Projects group several papers into one interactive page.
// `papers` are BibTeX keys from papers.bib; those papers get a
// "Project" link on the Publications page automatically.
export interface Project {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  papers: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'emotion-neurons',
    title: 'Emotion Neurons in Audio-Language Models',
    short: 'Emotion Neurons',
    blurb:
      'A few neurons inside large audio-language models decide which emotion they hear. Switch them off, turn them up, make the model speak with them, and follow them across languages and into faces.',
    papers: [
      'zhao-etal-2026-discovering',
      'zhao-etal-2026-neuron',
      'zhao2026multilingualemotionneuronslarge',
      'zhao2026emotionspeechfacesshared',
    ],
    tags: ['Interpretability', 'Speech emotion', 'LALMs'],
  },
];

export const projectFor = (key: string) => projects.find((p) => p.papers.includes(key));
