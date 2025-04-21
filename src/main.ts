// src/main.ts
import { AppFactory } from "@expressots/core";
import { App } from "./app";
import { env } from "./env";

AppFactory.create(App).then(async (webServerBuilder) => {
  const app = await webServerBuilder.listen(env.App.Port || 3000);
  const server = await app.getHttpServer();
  const wss = (app as App).getWebSocketServer();
  
  server.on("upgrade", (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit("connection", ws, request);
    });
  });

  wss.on('connection', (ws) => {
    console.log('New WebSocket connection');
  });

  console.log(`Server is running on port ${env.App.Port || 3000}`);
}).catch((error) => {
  console.error("Failed to start the application:", error);
  process.exit(1);
});