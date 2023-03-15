import express from "express";
import { redisClient } from "./helpers/redis";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

const start = async () => {
  await redisClient.connect()
  app.listen(3030, () => {
    console.log("🚀 servidor O N L I N E");
  });
}

void start()