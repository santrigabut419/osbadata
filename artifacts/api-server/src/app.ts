import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger as customLogger } from "./lib/logger"; // 2. Rename import agar tidak bentrok

const app: Express = express();

// 3. Gabungkan inisialisasi pinoHttp langsung di app.use
app.use(
  pinoHttp({
    logger: customLogger,
    serializers: {
      req(req: any) { // 4. Tambahkan tipe data (atau 'any' jika cepat)
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