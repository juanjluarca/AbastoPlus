import { injectable } from "inversify";
import { TranslationService } from "../application/ports/translation-service";
import * as deepl from "deepl-node";

@injectable()
export class DeepLTranslationService implements TranslationService {

    async translate(text: string, targetLanguage: string): Promise<string> {
        // Si falla, devuelve el texto original
        try {
            const authKey = process.env.DEEPL_API_KEY!;
            const deeplClient = new deepl.DeepLClient(authKey);
            const result = await deeplClient.translateText(
                text,
                null,
                targetLanguage as deepl.TargetLanguageCode
            );
            return result.text;
        } catch (error) {
            console.error("Error translating text with DeepL:", error);
            return text;
        }

    }
}