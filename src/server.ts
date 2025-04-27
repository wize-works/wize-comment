// src/server.ts

import './config/dotenv';

import express from 'express';
import { MongoClient } from 'mongodb';
import { createYoga } from 'graphql-yoga';
import { createServerSchema, createServerContext, registerSchemaRoutes, ILogger, registerAdminRoutes } from '@wizeworks/graphql-factory-mongo';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';
const database = process.env.DB_NAME || 'wize-comments';
const mongoClient = new MongoClient(MONGO_URI);
let currentSchemas: any = null;

const logger: ILogger = {
    error: (message: string) => {
        const date = new Date();
        const formattedDate = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
        console.error(`[${formattedDate}] ERROR: ${message}`);
    },
    warn: (message: string) => {
        const date = new Date();
        const formattedDate = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
        console.warn(`[${formattedDate}] WARNING: ${message}`);
    },
    info: (message: string) => {
        const date = new Date();
        const formattedDate = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
        console.info(`[${formattedDate}] INFO: ${message}`);
    },
    debug: (message: string) => {
        const date = new Date();
        const formattedDate = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
        console.debug(`[${formattedDate}] DEBUG: ${message}`);
    },
};


const start = async () => {
    await mongoClient.connect();

    const yoga = createYoga({
        graphqlEndpoint: '/graphql',
        schema: async (args) => {
            if(!currentSchemas) {
                currentSchemas = createServerSchema(args.request, mongoClient,database);
            }
            return currentSchemas;
        },
        context: async ({request}) => {
            const baseContext = await createServerContext(request, mongoClient);
            return {
                ...baseContext,
                database,
            };
        },
        graphiql: true
    });

    const app = express();
    app.use(express.json());
    
    const schema = registerSchemaRoutes(app, mongoClient, database);
    registerAdminRoutes(app, mongoClient, currentSchemas, database);

    // Use Yoga as middleware in Express
    app.use(yoga.graphqlEndpoint, yoga);

    app.listen(port, () => {
        console.log(`🚀 wize-comment API ready at http://localhost:${port}/graphql`);
    });
};

start();
