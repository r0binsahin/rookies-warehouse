import express, { Request, Response } from 'express';
import { logger } from './logger';
import { db } from '../server/db';
import { warehouse } from '../server/db/schema';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Hello from Index1');

  logger.info('Index page!');
});

app.get('/status', (_req: Request, res: Response) => {
  res.status(200).send('Hello from Rookies');

  logger.info('Status page!');
});

app.post('/warehouse', async (req: Request, res: Response) => {
  const { car_id } = req.body;

  if (!car_id)
    return res.status(404).send('Error: bad request. No car_id found!');

  await db
    .insert(warehouse)
    .values({ car_id: car_id, status: `${car_id ? 'OK' : 'ERROR'}` })
    .returning();

  res.status(200).json('Payment success');
  logger.info({
    level: 'info',
    message: 'Payment processed successfully',
    car_id,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
