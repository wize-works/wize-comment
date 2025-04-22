
import './config/dotenv';
import Sentry from './lib/sentry';

import Fastify from 'fastify';
import mercurius from 'mercurius';
import { authContext } from './lib/auth';

import { buildUnifiedGraphQLSchemaFromFolder } from '@wizeworks/graphql-factory';
import path from 'path';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';


const app = Fastify();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 80;

Sentry.setupFastifyErrorHandler(app);

let schema: GraphQLSchema;

try {
    schema = buildUnifiedGraphQLSchemaFromFolder('./models');

    const { validateSchema } = require('graphql');
    const errors = validateSchema(schema);
    if (errors.length > 0) {
        console.warn('[GraphQL] Invalid GraphQL schema:', errors);
        throw new Error('Schema validation failed');
    }

} catch (err) {
    console.error('[GraphQL] Failed to build schema — falling back to dummy schema', err);
    Sentry.captureException(err);

    schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: {}
        })
    });
}

app.register(mercurius, {
    schema: schema,
    graphiql: true,
    path: '/graphql',
    context: authContext,
});

app.setErrorHandler((error, request, reply) => {
    console.error('Error occurred:', error);
    Sentry.captureException(error);
    reply.status(500).send({ error: 'Internal Server Error' });
});

app.setNotFoundHandler((request, reply) => {
    const error = new Error(`Route ${request.method} ${request.url} not found`);
    Sentry.captureException(error);
    reply.status(404).send({ error: 'Not Found' });
});

app.listen({ port: port }, (err, address) => {
    if (err) {
        Sentry.captureException(err);
        console.error(err);
        process.exit(1);
    }
    console.log(`🚀 wize-comment API ready on port ${port}`);
});