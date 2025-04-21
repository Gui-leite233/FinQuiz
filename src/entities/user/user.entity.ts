import { provide } from "@expressots/core";
import { randomUUID } from "node:crypto";

@provide(UserEntity)
export class UserEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    biography: string;

    constructor() {
        this.id = randomUUID();
    }
}