// src/useCases/real/time/real-time.module.ts
import { ContainerModule, CreateModule } from "@expressots/core";
import { RealTimeController } from "./controller/real-time-controller.controller";
import { BroadcastScoresUseCase } from "./broadcast/scores/broadcast-scores.usecase";

export const RealTimeModule: ContainerModule = CreateModule([
    RealTimeController,
    BroadcastScoresUseCase
]);