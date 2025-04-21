import { AppExpress, IWebServerPublic } from "@expressots/adapter-express";
import { AppContainer, Env, provideSingleton, CreateModule, ContainerModule } from "@expressots/core";
import { WebSocketServer } from "ws";
import { AppModule } from "./useCases/app/app.module";
import { AdminModule } from "./useCases/admin/admin.module";
import { RealTimeModule } from "./useCases/real/time/real-time.module";
import { AuthModule } from "./useCases/auth/auth.module";

interface CustomAppContainer extends AppContainer {
    Provider: {
        register: (env: any) => void;
        get: (env: any) => any;
    };
    Middleware: {
        addBodyParser: () => void;
        setErrorHandler: (options: any) => void;
    };
}

const RootModule = CreateModule([AppModule, AdminModule, RealTimeModule, AuthModule]);

@provideSingleton(App)
export class App extends AppExpress implements IWebServerPublic {
    private config: CustomAppContainer;
    private wss: WebSocketServer;

    constructor() {
        super();
        this.config = this.configContainer([RootModule]) as CustomAppContainer;
        this.config.Provider = {
            register: (env: any) => {},
            get: (env: any) => ({ checkFile: (file: string) => {} })
        };
        this.config.Middleware = {
            addBodyParser: () => {},
            setErrorHandler: (options: any) => {}
        };
        this.wss = new WebSocketServer({ noServer: true });
    }

    getServer() {
        return this.config;
    }

    getWebSocketServer() {
        return this.wss;
    }

    async initEnvironment(): Promise<void> {
        await this.globalConfiguration();
    }

    async globalConfiguration(): Promise<void> {
        this.setGlobalRoutePrefix("/v1");
    }

    async configureServices(): Promise<void> {
        this.getServer().Provider.register(Env);
        this.getServer().Middleware.addBodyParser();
        this.getServer().Middleware.setErrorHandler({ showStackTrace: true });
    }

    async postServerInitialization(): Promise<void> {
        if (await this.isDevelopment()) {
            this.getServer().Provider.get(Env).checkFile(".env.development");
        }
    }

    async listen(port: string | number, appInfo?: any): Promise<IWebServerPublic> {
        await super.listen(port, appInfo);
        return this;
    }

    async serverShutdown(): Promise<void> {}
}