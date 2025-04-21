import { ContainerModule, CreateModule } from "@expressots/core";
import { AuthController } from "./controller/auth-controller.controller";
import { RegisterUserUseCase } from "./use-cases/register-user.usecase";

export const AuthModule: ContainerModule = CreateModule([
    AuthController,
    RegisterUserUseCase
]);