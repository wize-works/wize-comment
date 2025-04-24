// src/server.ts

import './config/dotenv';

import { createServer } from 'node:http';
import { MongoClient } from 'mongodb';
import { createYoga } from 'graphql-yoga';
import { createServerSchema, createServerContext } from '@wizeworks/graphql-factory-mongo';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/wize-comment';
console.log('GraphQL resolved from:', require.resolve('graphql'));
const start = async () => {
    const mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();

    const yoga = createYoga({
        graphqlEndpoint: '/graphql',
        schema: (args) => createServerSchema(args.request, mongoClient),
        context: (args) => createServerContext(args.request, mongoClient),
        graphiql: true
    });

    const server = createServer(yoga);

    server.listen(port, () => {
        console.log(`🚀 wize-comment API ready at http://localhost:${port}/graphql`);
    });
};

start();
