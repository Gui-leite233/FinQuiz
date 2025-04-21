import { provide } from "@expressots/core";

@provide(BroadcastScoresUseCase)
export class BroadcastScoresUseCase {
    execute() {
        return "Use Case";
    }
}
