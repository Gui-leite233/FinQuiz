import { provide } from "@expressots/core";

@provide(SubmitAnswerUseCase)
export class SubmitAnswerUseCase {
    execute() {
        return "Use Case";
    }
}
