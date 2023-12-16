//server/api/api.ts

// import fastify from '../node_modules/fastify/fastify';
// const server = fastify({
//   logger: true,
// });
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', function handler(request, reply) {
  reply.send({ hello: 'world' });
});

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
