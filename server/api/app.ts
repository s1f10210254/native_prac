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
  const usersIds = await prisma.user.findMany({
    select: {
      id: true,
    },
  });
  console.log('back users', usersIds);
  res.json(usersIds);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
