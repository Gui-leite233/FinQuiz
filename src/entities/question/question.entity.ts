import { provide } from "@expressots/core";
import { randomUUID } from "node:crypto";

@provide(QuestionEntity)
export class QuestionEntity {
    id: string;

    constructor() {
        this.id = randomUUID();
    }
}
