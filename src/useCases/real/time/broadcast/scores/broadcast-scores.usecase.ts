import { provide } from "@expressots/core";
import { WebSocketServer } from "ws";

@provide(BroadcastScoresUseCase)
export class BroadcastScoresUseCase {
    constructor(private readonly wss: WebSocketServer) {}

    execute(scores: any[]) {
        this.wss.clients.forEach(ws =>
            ws.send(JSON.stringify({ type: 'score_update', scores }))
        );
        return { message: "Scores broadcasted successfully" };
    }
} 