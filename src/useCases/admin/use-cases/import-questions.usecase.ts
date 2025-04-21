import { provide } from "@expressots/core";
import { ImportDto } from "../dtos";

@provide(ImportQuestionsUseCase)
export class ImportQuestionsUseCase {
    execute(dto: ImportDto) {
        // Implementation will go here
        return { message: "Questions imported successfully" };
    }
} 