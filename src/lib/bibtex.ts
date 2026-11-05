// A small BibTeX reader for papers.bib. It handles {braced} and "quoted"
// values, nested braces, month macros and the LaTeX bits that show up in
// ACL Anthology / arXiv exports.
import bibSource from '../data/papers.bib?raw';
import { pubExtras } from '../data/publications';
import { site } from '../data/site';

export interface Author {
  name: string;
  self: boolean;
}

export interface Publication {
  key: string;
  type: string;
  title: string;
  authors: Author[];
  year: number;
  venue: string;
  venueFull: string;
  note?: string;
  selected: boolean;
  firstAuthor: boolean;
  abstract?: string;
  url?: string;
  arxiv?: string;
  doi?: string;
  bibtex: string;
}

const MONTHS: Record<string, string> = {
  jan: 'January', feb: 'February', mar: 'March', apr: 'April', may: 'May', jun: 'June',
  jul: 'July', aug: 'August', sep: 'September', oct: 'October', nov: 'November', dec: 'December',
};

const SUPERSCRIPT: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
};

/** Turn a raw BibTeX value into plain readable text. */
export function cleanLatex(input: string): string {
  return input
    .replace(/\$\^\{?(\d+)\}?\$/g, (_, d: string) => [...d].map((c) => SUPERSCRIPT[c] ?? c).join(''))
    .replace(/\{\\%\}|\\%/g, '%')
    .replace(/\\&/g, '&')
    .replace(/\{?---\}?/g, '—')
    .replace(/\{?--\}?/g, '–')
    .replace(/``|\{``\}/g, '“')
    .replace(/''|\{''\}/g, '”')
    .replace(/\{`\}/g, '‘')
    .replace(/\{'\}/g, '’')
    .replace(/\\textit\{([^}]*)\}|\\emph\{([^}]*)\}/g, '$1$2')
    .replace(/\*\*/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Read a value starting at `i` (just after `=`). Returns the raw value and the index after it. */
function readValue(src: string, i: number): [string, number] {
  while (/\s/.test(src[i])) i++;
  const open = src[i];
  if (open === '{' || open === '"') {
    const close = open === '{' ? '}' : '"';
    let depth = 0;
    let j = i + 1;
    for (; j < src.length; j++) {
      const c = src[j];
      if (c === '\\') { j++; continue; }
      if (c === '{') depth++;
      else if (c === '}' && depth > 0) depth--;
      else if (c === close && depth === 0) break;
    }
    return [src.slice(i + 1, j), j + 1];
  }
  let j = i;
  while (j < src.length && !/[,}\s]/.test(src[j])) j++;
  const word = src.slice(i, j);
  return [MONTHS[word.toLowerCase()] ?? word, j];
}

interface RawEntry {
  type: string;
  key: string;
  fields: Record<string, string>;
  raw: string;
}

export function parseBibtex(src: string): RawEntry[] {
  const entries: RawEntry[] = [];
  const startRe = /@(\w+)\s*\{\s*([^,\s]+)\s*,/g;
  let m: RegExpExecArray | null;
  while ((m = startRe.exec(src))) {
    const type = m[1].toLowerCase();
    const key = m[2];
    const fields: Record<string, string> = {};
    let i = startRe.lastIndex;
    while (i < src.length) {
      while (i < src.length && /[\s,]/.test(src[i])) i++;
      if (src[i] === '}' || i >= src.length) { i++; break; }
      const nameMatch = /^([\w-]+)\s*=/.exec(src.slice(i));
      if (!nameMatch) break;
      i += nameMatch[0].length;
      const [value, next] = readValue(src, i);
      fields[nameMatch[1].toLowerCase()] = value;
      i = next;
    }
    entries.push({ type, key, fields, raw: src.slice(m.index, i).trim() });
    startRe.lastIndex = i;
  }
  return entries;
}

function parseAuthors(field: string): Author[] {
  return field
    .split(/\s+and\s+/)
    .map((a) => cleanLatex(a))
    .filter(Boolean)
    .map((a) => {
      const name = a.includes(',') ? a.split(',').map((s) => s.trim()).reverse().join(' ') : a;
      return { name, self: (site.selfNames as readonly string[]).includes(name) };
    });
}

/** A short, tidy BibTeX entry for the copy button (drops abstract and editors). */
function tidyBibtex(e: RawEntry): string {
  const keep = ['title', 'author', 'booktitle', 'journal', 'year', 'month', 'volume', 'number', 'pages', 'publisher', 'address', 'doi', 'eprint', 'archiveprefix', 'primaryclass', 'url'];
  const lines = keep
    .filter((k) => e.fields[k] !== undefined)
    .map((k) => `  ${k} = {${e.fields[k].replace(/\s+/g, ' ').trim()}}`);
  return `@${e.type}{${e.key},\n${lines.join(',\n')}\n}`;
}

function deriveVenue(f: Record<string, string>): string {
  if (f.booktitle) return cleanLatex(f.booktitle);
  if (f.journal) return cleanLatex(f.journal);
  if (f.archiveprefix?.toLowerCase() === 'arxiv') return 'arXiv';
  return '';
}

export function getPublications(): Publication[] {
  return parseBibtex(bibSource)
    .map((e) => {
      const f = e.fields;
      const extra = pubExtras[e.key] ?? {};
      const authors = parseAuthors(f.author ?? '');
      const year = Number.parseInt(f.year ?? '0', 10);
      const venueFull = deriveVenue(f);
      return {
        key: e.key,
        type: e.type,
        title: cleanLatex(f.title ?? ''),
        authors,
        year,
        venue: extra.venue ?? (venueFull ? `${venueFull} ${year}` : String(year)),
        venueFull,
        note: extra.note,
        selected: Boolean(extra.selected),
        firstAuthor: authors[0]?.self ?? false,
        abstract: f.abstract ? cleanLatex(f.abstract) : undefined,
        url: f.url?.trim(),
        arxiv: f.archiveprefix?.toLowerCase() === 'arxiv' && f.eprint ? `https://arxiv.org/abs/${f.eprint.trim()}` : undefined,
        doi: f.doi ? `https://doi.org/${f.doi.trim()}` : undefined,
        bibtex: tidyBibtex(e),
      } satisfies Publication;
    })
    .sort((a, b) => b.year - a.year);
}
