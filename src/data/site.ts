// Everything about you that appears in more than one place lives here.
export const site = {
  name: 'Xiutian Zhao',
  nickname: 'Theo',
  title: 'Xiutian (Theo) Zhao',
  role: 'PhD student · ECE · Johns Hopkins University',
  description:
    'Xiutian (Theo) Zhao is a PhD student at Johns Hopkins University (CLSP) working on utilizable mechanistic interpretability of audio-language models: how they represent human-centered concepts such as emotion and speech-based diagnostic information.',
  email: 'xzhao117@jh.edu',
  // How your name appears in author lists, so it can be highlighted.
  selfNames: ['Xiutian Zhao'],
  links: [
    { label: 'Email', href: 'mailto:xzhao117@jh.edu', icon: 'mail' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=HfOmKncAAAAJ', icon: 'scholar' },
    { label: 'GitHub', href: 'https://github.com/xiutian', icon: 'github' },
  ],
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Gallery', href: '/gallery/' },
] as const;
