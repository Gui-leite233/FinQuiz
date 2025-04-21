import { ContainerModule, CreateModule } from "@expressots/core";
import { AdminController } from "./controller/admin-controller.controller";

export const AdminModule: ContainerModule = CreateModule([AdminController]);