# 📘 WizeComment API

[![status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/your-org/wize-comment)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![build](https://img.shields.io/badge/build-passing-success)]()
[![graphql](https://img.shields.io/badge/graphql-supported-ff69b4.svg)]()
[![supabase](https://img.shields.io/badge/supabase-integrated-3ecf8e.svg)]()

WizeComment is a lightweight, multi-tenant GraphQL API for managing comments, designed for integration into content platforms. It supports structured comment threads with fine-grained access control via API key scopes.

---

## 🚀 Features
- Multi-tenant comment isolation via Postgres RLS
- API key authentication with scope validation (`comments:read`, `comments:write`, `comments:delete`)
- GraphQL endpoint for creating, retrieving, and deleting comments
- Supabase as a backend database
- Sentry for exception monitoring
- Context-aware GraphQL resolver injection

---

## 🛠 Setup

### 1. Environment Variables
Create a `.env` file in the root:
```env
SUPABASE_URL=https://<your-supabase-project>.supabase.co
SUPABASE_SERVICE_KEY=service_role_<your-key>
SENTRY_DSN=https://<your-sentry-dsn>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the API Server
```bash
npm run dev
```

---

## 🔑 API Authentication
Requests must include a header:
```http
wize-api-key: <your-api-key>
```
This key must be stored in the `api.api_keys` table in Supabase with `is_active = true`.

---

## 📋 Example GraphQL Query
```graphql
query GetComments($postId: String!) {
  comments(postId: $postId) {
    id
    content
    createdAt
    userId
  }
}

```

---

## ✏️ Example GraphQL Mutation
```graphql
mutation AddComment($postId: String!, $content: String!, $parentId: ID) {
  addComment(postId: $postId, content: $content, parentId: $parentId) {
    id
    content
    createdAt
  }
}
```

---

## 📤 Deployment
This app is meant to run as a backend microservice. You can deploy it to:
- Render / Railway / Fly.io
- Docker container
- Fastify server under reverse proxy

---

## 🧩 Notes
- Comments are soft-deleted using `is_deleted`
- All Supabase access uses `schema('api')` to respect schema restrictions
- `lastUsedAt` is updated on each valid API key use

---

## 📞 Contact
Built and maintained by the JobSight team.
