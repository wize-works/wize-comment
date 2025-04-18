// src/lib/sentry.ts
import * as Sentry from '@sentry/node';

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0, // adjust in prod
    environment: process.env.NODE_ENV || 'development',
    attachStacktrace: true
});

export default Sentry;
