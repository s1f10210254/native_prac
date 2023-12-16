//server/api/api.ts

import { FastifyReply, FastifyRequest } from 'fastify';

// import fastify from '../node_modules/fastify/fastify';
// const server = fastify({
//   logger: true,
// });
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ hello: 'world' });
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.console.log.console.error(err);
    process.exit(1);
  }
};
start();
