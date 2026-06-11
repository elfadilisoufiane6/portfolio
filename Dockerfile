# syntax=docker/dockerfile:1.7
# Root-level Dockerfile for EasyPanel — builds the Next.js app
# located in ./frontend/ from the repo root as build context.

# ============================================================
# 1. Base image
# ============================================================
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# ============================================================
# 2. Install dependencies (cached layer)
# ============================================================
FROM base AS deps
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm ci

# ============================================================
# 3. Build the Next.js app
# ============================================================
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY frontend/ ./
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ============================================================
# 4. Runtime — minimal image with standalone server
# ============================================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
