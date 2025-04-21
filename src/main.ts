// src/main.ts
import { AppFactory } from "@expressots/core";
import { App } from "./app"; // Fix relative import
import { env } from "./env";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import express from "express";

AppFactory.create(App).then((app) => {
  const expressApp = app.getServer().engine;  // Get Express instance from app
  const server = createServer(expressApp); 

  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit("connection", ws, request);
    });
  });

  // Make WebSocketServer available for DI container
  app.Provider.registerValue("WebSocketServer", wss);

  server.listen(env.App.Port, () => {
    console.log(
      `${env.App.appName} v${env.App.appVersion} listening on ${env.App.Port}`
    );
  });
});