import express, { Request, Response } from "express";
import { logger } from "./logger";
import { db } from "../server/db";
import { warehouse } from "../server/db/schema";
import { eq } from "drizzle-orm";

const app = express();
const port = 8080;
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Hello from Index1");

  logger.info("Index page!");
});

app.get("/status", (_req: Request, res: Response) => {
  res.status(200).send("Hello from Rookies");

  logger.info("Status page!");
});

app.post("/warehouse", async (req: Request, res: Response) => {
  const { car_id } = req.body;

  const newCarId = car_id.trim();

  if (!newCarId) {
    res.status(404).send("Error: bad request. No car_id found!");
    logger.info({
      level: "info",
      message: "Error: bad request. No car_id found!",
    });
  }

  const filteredResult = await db
    .select()
    .from(warehouse)
    .where(eq(warehouse.car_id, newCarId));

  if (filteredResult.length === 0) {
    res.status(404).send("Error: car_id not found in warehouse!");
    logger.info({
      level: "info",
      message: "Error: car_id not found in warehouse!",
    });
    return;
  }

  if (filteredResult[0].status === "SOLD") {
    res.status(400).send("Car is not available.");
    logger.info({
      level: "info",
      message: "Car is not available.",
      car_id,
    });
    return;
  }

  await db
    .update(warehouse)
    .set({ status: "SOLD" })
    .where(eq(warehouse.car_id, newCarId))
    .returning();

  res.status(200).json("Payment success and it's sold.");
  logger.info({
    level: "info",
    message: "Warehouse payment processed successfully",
    car_id,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
