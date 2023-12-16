//server/api/api.ts

import { PrismaClient } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';
const server = require('fastify')({ logger: true });
const prisma = new PrismaClient();
// Declare a route
server.get('/', (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ hello: 'world' });
});

server.get('/api/greet', (request: FastifyRequest, reply: FastifyReply) => {
  reply.type('application/json').code(200);
  return { hello: 'world' };
});

server.get('/api/users', async (request: FastifyRequest, reply: FastifyReply) => {
  const userIds = await prisma.user.findMany();
  console.log('userid', userIds);
  return { userIds };
});
const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    server.console.log.console.error(err);
    process.exit(1);
  }
};
start();
