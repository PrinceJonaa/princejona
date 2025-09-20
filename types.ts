
export interface CodexContentBlock {
  type: 'text' | 'video';
  en: string;
  es: string;
}

export interface Codex {
  slug: string;
  title: string;
  description: string;
  content: CodexContentBlock[];
}
