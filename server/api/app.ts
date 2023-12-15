//server/api/api.ts
import express, { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/greet', (req: Request, res: Response) => {
  res.json({ message: 'こんにちは!NodejsとExpressのAPIへようこそ' });
});

app.get('/api/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  console.log('back users', users);
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
