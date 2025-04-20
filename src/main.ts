import { AppFactory } from "@expressots/core";
import { App } from "app";
import { env } from "env";
import { createServer } from "http";
import { WebSocketServer } from "ws";

AppFactory.create(App).then(app => {
  const expressApp = app.getExpressApp();
  const server = createServer(expressApp);

  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, ws => {
      wss.emit("connection", ws, request);
    });
  });

  server.listen(env.App.Port, () => {
    console.log(
      `${env.App.appName} v${env.App.appVersion} listening on ${env.App.Port}`
    );
  });
});
