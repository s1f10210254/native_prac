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

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
