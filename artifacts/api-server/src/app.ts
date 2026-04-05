import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import pinoHttp from 'pino-http'; // Gunakan default import tanpa { }
import router from "./routes";
import { logger as customLogger } from "./lib/logger"; // Rename agar tidak bentrok

const app: Express = express();

app.use(
  pinoHttp({
    logger: customLogger,
    serializers: {
      req(req: any) { 
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: any) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;