import { provide } from "@expressots/core";

@provide(CreateQuizUseCase)
export class CreateQuizUseCase {
    execute() {
        return "Use Case";
    }
}
