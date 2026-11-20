// Numbers behind the Emotion Neurons project page.
//
// Every value comes from the papers' own figures and tables (Overleaf sources):
//   ESN   heatmaps in figures/acc_delta_qwen25_omni_7b_*_CAS_*.png (values printed in the cells)
//   EVC   Table "alpha"; audio clips from the ESN keynote deck
//   MLEN  Tables "deact_results", "steer_results", "poolsize" and §"Cross-lingual agreement"
//   Faces figures/overlap/CrossModal_*_JSC.png and Table "cross_results"
// If a paper changes, edit the numbers here; the widgets read nothing else.

/* ---------------------------------------------------------------- ESN --- */

export interface HeatPanel {
  /** 'off' = deactivation, 'up' = targeted steering */
  mode: 'off' | 'up';
  dataset: string;
  /** Neuron budget r for 'off', steering strength α for 'up'. */
  knob: string;
  cols: string[];
  /** First row is the random-neuron control. Values: accuracy change in points. */
  rows: { label: string; values: number[] }[];
  /** Source figure, for checking. */
  source: string;
}

const E5 = ['Anger', 'Happy', 'Neutral', 'Sad', 'Surprise'];
const r = (label: string, values: number[]) => ({ label, values });
const fig = (name: string) => `ESN/figures/acc_delta_qwen25_omni_7b_${name}.png`;

export const esnPanels: HeatPanel[] = [
  {
    mode: 'off', dataset: 'MSP-Podcast', knob: '0.1%', cols: E5,
    source: fig('MSP-PODCAST-Publish-1.12_MSP-PODCAST-Publish-1.12_CAS_ablate_0.001_0.95_1000'),
    rows: [
      r('Random', [-1.4, -0.8, 0.4, -1.0, 0.5]),
      r('Anger', [-3.0, 0.0, 1.2, -1.0, 0.4]),
      r('Happy', [-3.2, -4.2, 2.0, -1.8, 3.0]),
      r('Neutral', [-0.8, 0.0, 1.0, -0.6, 0.4]),
      r('Sad', [6.2, 0.6, -1.0, -13.6, -0.6]),
      r('Surprise', [-1.0, 0.2, 0.0, -0.6, -0.2]),
    ],
  },
  {
    mode: 'off', dataset: 'MSP-Podcast', knob: '0.5%', cols: E5,
    source: fig('MSP-PODCAST-Publish-1.12_MSP-PODCAST-Publish-1.12_CAS_ablate_0.005_0.95_1000'),
    rows: [
      r('Random', [-2.8, -0.7, 0.9, -1.7, 2.2]),
      r('Anger', [-9.8, 1.4, -1.2, 1.6, 1.0]),
      r('Happy', [-3.6, -11.2, 2.4, -1.4, 3.8]),
      r('Neutral', [0.8, 0.4, 1.0, -1.4, -1.4]),
      r('Sad', [5.0, 0.6, 2.0, -15.6, -1.8]),
      r('Surprise', [-2.0, -0.8, 2.8, 0.4, -1.4]),
    ],
  },
  {
    mode: 'off', dataset: 'MSP-Podcast', knob: '1.0%', cols: E5,
    source: fig('MSP-PODCAST-Publish-1.12_MSP-PODCAST-Publish-1.12_CAS_ablate_0.01_0.95_1000'),
    rows: [
      r('Random', [-4.3, -1.6, -0.8, 0.8, -0.4]),
      r('Anger', [-28.8, 2.4, 2.6, 5.4, 5.8]),
      r('Happy', [-2.6, -16.2, 4.6, -2.8, 4.2]),
      r('Neutral', [0.6, -0.8, 2.6, -0.8, -3.8]),
      r('Sad', [3.8, -1.4, 1.8, -16.2, -1.2]),
      r('Surprise', [-7.6, -3.6, 0.4, 0.0, 1.4]),
    ],
  },
  {
    mode: 'off', dataset: 'MELD', knob: '0.5%', cols: E5,
    source: fig('MELD.Raw_MELD.Raw_CAS_ablate_0.005_0.95_200'),
    rows: [
      r('Random', [-0.2, 0.3, 1.7, 0.8, 1.7]),
      r('Anger', [-18.5, 4.0, 6.5, 1.5, 5.0]),
      r('Happy', [-0.5, -25.0, 10.5, 1.5, 6.0]),
      r('Neutral', [-3.5, 0.0, -3.5, -0.5, 5.0]),
      r('Sad', [-0.5, -1.0, 0.5, -14.5, 6.5]),
      r('Surprise', [4.0, 14.5, 6.5, 2.0, -36.5]),
    ],
  },
  {
    mode: 'off', dataset: 'IEMOCAP', knob: '0.5%', cols: ['Anger', 'Happy', 'Neutral', 'Sad', 'Frustration'],
    source: fig('IEMOCAP_full_release_IEMOCAP_full_release_CAS_ablate_0.005_0.95_200'),
    rows: [
      r('Random', [0.5, -0.5, -0.2, 0.3, -1.7]),
      r('Anger', [-22.5, 1.5, -3.0, 2.0, 10.0]),
      r('Happy', [1.5, -18.0, 3.0, 5.0, -1.5]),
      r('Neutral', [-2.5, -2.0, -9.0, 0.5, 5.5]),
      r('Sad', [4.5, 1.5, 0.5, -11.0, -5.5]),
      r('Frustration', [1.5, 1.5, 4.0, 0.5, -7.0]),
    ],
  },
  {
    mode: 'up', dataset: 'MELD', knob: '0.1', cols: E5,
    source: fig('MELD.Raw_MELD.Raw_CAS_steer_0.005_0.95_200_alpha0.10'),
    rows: [
      r('Random', [0.3, 0.5, 0.6, 0.4, 1.1]),
      r('Anger', [2.0, -0.5, 0.0, 0.0, 1.5]),
      r('Happy', [-0.5, 2.0, -0.5, 0.5, 1.0]),
      r('Neutral', [0.5, 0.5, 0.5, 0.5, 1.5]),
      r('Sad', [-1.0, 0.0, 1.0, 2.5, 1.5]),
      r('Surprise', [-0.5, -1.0, 0.0, 0.5, 5.0]),
    ],
  },
  {
    mode: 'up', dataset: 'MELD', knob: '0.3', cols: E5,
    source: fig('MELD.Raw_MELD.Raw_CAS_steer_0.005_0.95_200_alpha0.30'),
    rows: [
      r('Random', [-0.1, 0.6, 0.4, 0.6, 1.5]),
      r('Anger', [2.5, -0.5, -1.5, -0.5, 0.5]),
      r('Happy', [-2.0, 5.0, -1.5, 0.0, 0.0]),
      r('Neutral', [-1.0, 0.0, 3.0, 0.5, 2.0]),
      r('Sad', [-1.5, 0.5, 1.5, 4.5, 0.0]),
      r('Surprise', [-2.0, -1.5, -2.0, 0.0, 8.5]),
    ],
  },
  {
    mode: 'up', dataset: 'MELD', knob: '0.5', cols: E5,
    source: fig('MELD.Raw_MELD.Raw_CAS_steer_0.005_0.95_200_alpha0.50'),
    rows: [
      r('Random', [-0.5, 1.5, 0.8, 0.7, 1.6]),
      r('Anger', [4.5, -1.5, -2.0, -0.5, 2.0]),
      r('Happy', [-1.5, 7.5, -2.5, 1.0, -1.5]),
      r('Neutral', [-2.0, 0.0, 3.0, 1.0, 0.5]),
      r('Sad', [-1.0, 0.0, 2.0, 6.5, 0.0]),
      r('Surprise', [-4.5, -4.5, -4.0, -1.0, 12.0]),
    ],
  },
  {
    mode: 'up', dataset: 'MELD', knob: '1.0', cols: E5,
    source: fig('MELD.Raw_MELD.Raw_CAS_steer_0.005_0.95_200_alpha1.00'),
    rows: [
      r('Random', [-1.1, 1.1, 0.4, 0.8, 1.0]),
      r('Anger', [10.0, -4.0, -5.0, -1.0, -1.0]),
      r('Happy', [-2.0, 17.5, -8.0, -2.0, -11.0]),
      r('Neutral', [-3.5, -0.5, 4.5, 0.0, -2.0]),
      r('Sad', [-3.0, 1.5, 1.0, 12.0, -3.0]),
      r('Surprise', [-7.5, -9.0, -8.0, -5.5, 19.5]),
    ],
  },
];

/* ---------------------------------------------------------------- EVC --- */

export interface KnobStep {
  id: string;
  label: string;
  /** Steering strength; null for the source clip and the plain prompt. */
  alpha: number | null;
}

export const evcSteps: KnobStep[] = [
  { id: 'source', label: 'Source', alpha: null },
  { id: 'prompt', label: 'Prompt only', alpha: null },
  { id: 'a0.5', label: 'α 0.5', alpha: 0.5 },
  { id: 'a1.0', label: 'α 1.0', alpha: 1.0 },
  { id: 'a2.0', label: 'α 2.0', alpha: 2.0 },
];

export const evcClips = {
  anger: {
    label: 'Anger',
    text: 'I know how to obey orders.',
    clip: 'ESD 0012_000295',
    steps: ['source', 'prompt', 'a0.5', 'a1.0', 'a2.0'],
  },
} as const;

/**
 * Corpus-level effect of steering strength (Qwen2.5-Omni-7B, ConAct, r = 0.5%),
 * averaged over all four target emotions. Gain = change in emotion match (pts)
 * judged by emotion2vec / Qwen3. WER without steering: 19.0%.
 */
export const evcAlpha = [
  { alpha: 0.3, gainE2V: 0.78, gainQwen: 0.37, wer: 19.33 },
  { alpha: 0.5, gainE2V: 2.0, gainQwen: 1.13, wer: 20.67 },
  { alpha: 1.0, gainE2V: 4.27, gainQwen: 3.6, wer: 29.65 },
  { alpha: 2.0, gainE2V: 8.89, gainQwen: 20.67, wer: 203.65 },
];
export const evcBaseWer = 19.0;


/* --------------------------------------------------------------- MLEN --- */

export const mlenLanguages = {
  identify: [
    { name: 'English', corpus: 'MSP-Podcast' },
    { name: 'Mandarin', corpus: 'BIIC' },
    { name: 'Amharic', corpus: 'ASED' },
    { name: 'Arabic', corpus: 'MDER' },
    { name: 'Bengali', corpus: 'SUBESCO' },
    { name: 'Italian', corpus: 'Emozionalmente' },
    { name: 'Polish', corpus: 'nEMO' },
    { name: 'Urdu', corpus: 'UrduSER' },
  ],
  heldOut: [
    { name: 'French', corpus: 'CaFE' },
    { name: 'German', corpus: 'EmoDB' },
    { name: 'Persian', corpus: 'ShEMO' },
    { name: 'Russian', corpus: 'RESD' },
  ],
};

/**
 * Selectivity (ESS, pp) on the 4 held-out languages of CR-Fusion over k of the
 * 8 identification languages. Mean over pools, [min, max] across pools.
 * k = 1: the 8 single-language neuron sets; k = 2, 4, 6: three random pools each;
 * k = 8: all eight. Negative = deactivation hurts the target emotion most.
 */
export const mlenPoolK = [1, 2, 4, 6, 8];
export const mlenPool: Record<string, { off: [number, number, number][]; up: [number, number, number][] }> = {
  'Audio Flamingo 3': {
    off: [[-3.65, -5.64, -1.34], [-5.97, -6.71, -4.68], [-6.81, -7.38, -6.36], [-8.85, -9.84, -7.47], [-9.93, -9.93, -9.93]],
    up: [[1.66, 0.28, 2.72], [2.61, 2.2, 3.14], [3.52, 3.29, 3.72], [3.95, 3.4, 4.3], [4.0, 4.0, 4.0]],
  },
  'Kimi-Audio': {
    off: [[-9.61, -15.02, -3.47], [-16.28, -19.5, -11.36], [-15.42, -19.38, -12.35], [-19.56, -19.99, -18.76], [-19.31, -19.31, -19.31]],
    up: [[3.58, 1.7, 5.15], [5.41, 4.04, 6.82], [5.36, 4.64, 5.83], [6.27, 6.24, 6.33], [6.34, 6.34, 6.34]],
  },
  'MiniCPM-o 4.5': {
    off: [[-5.05, -9.47, -0.74], [-7.46, -8.74, -5.32], [-9.02, -10.49, -8.2], [-10.38, -10.91, -9.96], [-9.51, -9.51, -9.51]],
    up: [[3.05, -0.09, 5.48], [3.89, 2.46, 4.79], [5.75, 5.21, 6.58], [6.88, 6.3, 7.44], [6.48, 6.48, 6.48]],
  },
  'Qwen2.5-Omni': {
    off: [[-3.75, -6.77, 0.28], [-4.41, -6.35, -1.82], [-4.6, -6.08, -3.81], [-6.32, -7.01, -5.28], [-7.86, -7.86, -7.86]],
    up: [[1.8, -0.01, 3.97], [2.44, 1.31, 3.82], [2.59, 1.62, 3.69], [3.37, 2.84, 3.95], [3.64, 3.64, 3.64]],
  },
};
/** 95th percentile of |ESS| for random neuron sets of the same size (pp). */
export const mlenRandomBand: [number, number] = [0.27, 1.63];
/** Jaccard overlap of two neuron sets (25 correct clips each), range across the 4 LALMs. */
export const mlenOverlap = {
  sameCorpus: [0.12, 0.23] as [number, number],
  otherLanguage: [0.02, 0.07] as [number, number],
};

/* -------------------------------------------------------------- Faces --- */

export const faceEmotions = ['Anger', 'Fear', 'Happiness', 'Neutral', 'Sadness'];

/** Jaccard overlap of face-derived (rows) and voice-derived (columns) neuron sets. */
export const faceOverlap: Record<string, { values: number[][]; source: string }> = {
  'Gemma-4-12B-it': {
    source: 'FACE/figures/overlap/CrossModal_gemma-4-12B-it_CAM_100_top0.005_JSC.png',
    values: [
      [0.03, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.02, 0.01, 0.0, 0.0],
      [0.0, 0.0, 0.03, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.01, 0.0],
      [0.0, 0.01, 0.0, 0.0, 0.02],
    ],
  },
  'MiniCPM-o 4.5': {
    source: 'FACE/figures/overlap/CrossModal_MiniCPM-o-4_5_CAM_100_top0.005_JSC.png',
    values: [
      [0.05, 0.0, 0.0, 0.0, 0.0],
      [0.01, 0.03, 0.02, 0.0, 0.0],
      [0.0, 0.0, 0.05, 0.0, 0.01],
      [0.0, 0.0, 0.0, 0.02, 0.0],
      [0.0, 0.01, 0.0, 0.0, 0.07],
    ],
  },
  'Qwen2.5-Omni': {
    source: 'FACE/figures/overlap/CrossModal_Qwen2.5-Omni-7B_CAM_100_top0.005_JSC.png',
    values: [
      [0.03, 0.01, 0.0, 0.01, 0.0],
      [0.01, 0.04, 0.01, 0.0, 0.0],
      [0.0, 0.0, 0.07, 0.0, 0.0],
      [0.0, 0.01, 0.0, 0.02, 0.01],
      [0.0, 0.0, 0.0, 0.0, 0.03],
    ],
  },
};

/**
 * Cross-modal interventions (Table cross_results): accuracy change in points.
 * voiceOnFace = neurons found from speech, applied while recognizing faces.
 * faceOnVoice = neurons found from faces, applied while recognizing speech.
 */
export interface CrossCell { random: number; target: number; others: number }
export const faceCross: Record<'voiceOnFace' | 'faceOnVoice', Record<string, { off: CrossCell; up: CrossCell }>> = {
  voiceOnFace: {
    'Gemma-4-12B-it': { off: { random: -0.28, target: -18.07, others: 0.86 }, up: { random: -0.34, target: 6.93, others: -1.35 } },
    'MiniCPM-o 4.5': { off: { random: 0.13, target: -5.33, others: -0.27 }, up: { random: -0.01, target: 1.8, others: -0.28 } },
    'Qwen2.5-Omni': { off: { random: -1.07, target: -7.2, others: -0.73 }, up: { random: -0.84, target: 3.2, others: -1.2 } },
  },
  faceOnVoice: {
    'Gemma-4-12B-it': { off: { random: -0.4, target: -8.54, others: 0.83 }, up: { random: -0.22, target: 4.0, others: -0.87 } },
    'MiniCPM-o 4.5': { off: { random: -0.46, target: -4.14, others: 0.73 }, up: { random: -0.14, target: 3.06, others: -0.74 } },
    'Qwen2.5-Omni': { off: { random: 0.06, target: -7.33, others: 1.1 }, up: { random: -0.1, target: 2.4, others: -0.96 } },
  },
};
