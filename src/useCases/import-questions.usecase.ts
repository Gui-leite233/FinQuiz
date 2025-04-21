import { provide } from "@expressots/core";

@provide(ImportQuestionsUseCase)
export class ImportQuestionsUseCase {
    execute(dto: any) {
        return { message: "Questions imported successfully" };
    }
}