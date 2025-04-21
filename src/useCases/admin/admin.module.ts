// src/useCases/admin/admin.module.ts
import { Module } from "@expressots/core";
import { AdminController } from "./controller/admin-controller.controller";
// You'll need to create these use cases or adjust the import path
import { ImportQuestionsUseCase } from "./use-cases/import-questions.usecase";
import { UpdateSettingsUseCase } from "./use-cases/update-settings.usecase";

@Module({
  controllers: [AdminController],
  providers: [ImportQuestionsUseCase, UpdateSettingsUseCase],
})
export class AdminModule {}