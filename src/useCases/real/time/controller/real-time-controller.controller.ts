import { injectable } from '@expressots/core';
import { WebSocketServer } from 'ws';

@injectable()
export class RealTimeController {
  constructor(private readonly wss: WebSocketServer) {}

  broadcastScores(scores: any[]) {
    this.wss.clients.forEach(ws =>
      ws.send(JSON.stringify({ type: 'score_update', scores })),
    );
  }
}
