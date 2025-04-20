import { provide } from "@expressots/core";
import { randomUUID } from "node:crypto";

@provide(ScoreEntity)
export class ScoreEntity {
    id: string;

    constructor() {
        this.id = randomUUID();
    }
}
