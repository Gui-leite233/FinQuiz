import { provide } from "@expressots/core";
import { SettingsDto } from "../dtos";

@provide(UpdateSettingsUseCase)
export class UpdateSettingsUseCase {
    execute(dto: SettingsDto) {
        // Implementation will go here
        return { message: "Settings updated successfully" };
    }
} 