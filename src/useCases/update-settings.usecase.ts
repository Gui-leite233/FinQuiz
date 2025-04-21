import { provide } from "@expressots/core";

@provide(UpdateSettingsUseCase)
export class UpdateSettingsUseCase {
    execute(dto: any) {
        return { message: "Settings updated successfully" };
    }
}