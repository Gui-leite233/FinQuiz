import { Controller, Post, Body } from '@expressots/core';
import { ImportQuestionsUseCase, UpdateSettingsUseCase } from '../use-cases';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly importQuestions: ImportQuestionsUseCase,
    private readonly updateSettings: UpdateSettingsUseCase,
  ) {}

  @Post('import-questions')
  importQuestionsEndpoint(@Body() dto: ImportDto) {
    return this.importQuestions.execute(dto);
  }

  @Post('update-settings')
  updateSettingsEndpoint(@Body() dto: SettingsDto) {
    return this.updateSettings.execute(dto);
  }
}
