// Interface para implementar el servicio de traducción.

export interface TranslationService {
  translate(text: string, targetLanguage: string): Promise<string>;
}