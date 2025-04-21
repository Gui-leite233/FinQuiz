import { Module } from "@expressots/core";
import { AdminController } from "../controllers/admin-controller.controller";
import { ImportQuestionsUseCase, UpdateSettingsUseCase } from "../use-cases";

@Module({
  controllers: [AdminController],
  providers: [ImportQuestionsUseCase, UpdateSettingsUseCase],
})
export class AdminModule {}
