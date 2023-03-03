import 'dotenv/config';
import express from 'express';
import { userRouter } from "./routes/UserRoutes";
import { urlRouter } from "./routes/UrlRoutes";

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(urlRouter);

export { app }