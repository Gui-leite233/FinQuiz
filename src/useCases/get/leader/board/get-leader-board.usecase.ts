import { provide } from "@expressots/core";

@provide(GetLeaderBoardUseCase)
export class GetLeaderBoardUseCase {
    execute() {
        return "Use Case";
    }
}
