
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
    context: getContext
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    Sentry.captureException(err);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    Sentry.captureException(err);
});

app.get('/', async (request, reply) => {
    return { message: 'Welcome to the Comments API!' };
});

app.listen({ port: 4000 }, (err, address) => {
    if (err) {
        Sentry.captureException(err);
        console.error(err);
        process.exit(1);
    }
    console.log(`🚀 Comments API ready at ${address}/graphql`);
});