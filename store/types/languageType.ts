export interface Language {
  code: string;
  name: string;
  targets: string[];
}

export interface LanguageState {
  languages: Language[];
  loading: boolean;
}
