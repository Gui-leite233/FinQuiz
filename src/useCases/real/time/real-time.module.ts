// src/modules/real-time.module.ts
import { Module } from "@expressots/core";
import { RealTimeController } from "../controllers/real-time-controller.controller";
import { BroadcastScoresUseCase } from "../use-cases/broadcast-scores.usecase";

@Module({
  controllers: [RealTimeController],
  providers: [BroadcastScoresUseCase],
})
export class RealTimeModule {}
