// src/useCases/admin/controller/admin-controller.controller.ts
import { Controller, Post, body, controller } from '@expressots/adapter-express';
import { ImportQuestionsUseCase } from '../use-cases/import-questions.usecase';
import { UpdateSettingsUseCase } from '../use-cases/update-settings.usecase';
import { ImportDto, SettingsDto } from '../dtos';

@controller('admin')
export class AdminController {
  constructor(
    private readonly importQuestions: ImportQuestionsUseCase,
    private readonly updateSettings: UpdateSettingsUseCase,
  ) {}

  @Post('import-questions')
  importQuestionsEndpoint(@body() dto: ImportDto) {
    return this.importQuestions.execute(dto);
  }

  @Post('update-settings')
  updateSettingsEndpoint(@body() dto: SettingsDto) {
    return this.updateSettings.execute(dto);
  }
}