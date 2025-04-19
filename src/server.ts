
import './config/dotenv';
import Sentry from './lib/sentry';

import Fastify from 'fastify';
import mercurius from 'mercurius';
import { schema } from './graphql/schema';
import { getContext } from './graphql/context';


const app = Fastify();

Sentry.setupFastifyErrorHandler(app);

app.register(mercurius, {
    schema,
    graphiql: true,
    context: getContext,
    path: '/graphql',
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    Sentry.captureException(err);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    Sentry.captureException(err);
});
app.addHook('onRequest', (request, reply, done) => {
    console.log(`Request received: ${request.method} ${request.url}`);
    done();
});
app.setNotFoundHandler((request, reply) => {
    const error = new Error(`Route ${request.method} ${request.url} not found`);
    Sentry.captureException(error);
    reply.status(404).send({ error: 'Not Found' });
});

app.listen({ port: 4000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        Sentry.captureException(err);
        console.error(err);
        process.exit(1);
    }
    console.log(`🚀 Comments API ready at ${address}/graphql`);
});