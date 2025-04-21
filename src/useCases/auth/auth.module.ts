import { ContainerModule, CreateModule } from "@expressots/core";
import { AuthController } from "./controller/auth-controller.controller";

export const AuthModule: ContainerModule = CreateModule([AuthController]);