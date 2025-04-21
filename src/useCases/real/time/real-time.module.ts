// src/useCases/real/time/real-time.module.ts
import { Module } from "@expressots/core";
import { RealTimeController } from "./controller/real-time-controller.controller";
import { BroadcastScoresUseCase } from "../broadcast/scores/broadcast-scores.usecase";

@Module({
  controllers: [RealTimeController],
  providers: [BroadcastScoresUseCase],
})
export class RealTimeModule {}