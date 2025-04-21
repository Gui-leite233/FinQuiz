import { AppFactory } from "@expressots/core";
import { App } from "app";
import { env } from "env";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import express from "express";

AppFactory.create(App).then(() => {
  const expressApp = express();
  const server = createServer(expressApp); 

  const wss = new WebSocketServer({ noServer: true }); // Create WebSocket server

  server.on("upgrade", (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit("connection", ws, request);
    });
  });

  server.listen(env.App.Port, () => {
    console.log(
      `${env.App.appName} v${env.App.appVersion} listening on ${env.App.Port}`
    );
  });
});