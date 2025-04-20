import { provide } from "@expressots/core";
import { randomUUID } from "node:crypto";

@provide(QuizEntity)
export class QuizEntity {
    id: string;

    constructor() {
        this.id = randomUUID();
    }
}
