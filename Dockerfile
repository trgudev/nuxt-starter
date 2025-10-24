FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

COPY .env.prod .env.test ./
COPY nuxt.config.ts tsconfig.json eslint.config.mjs ./
COPY app/ ./app/
COPY server/ ./server/
COPY public/ ./public/

ARG BUILD_ENV=test

RUN if [ "$BUILD_ENV" = "prod" ]; then \
  pnpm build; \
  else \
  pnpm build:test; \
  fi

FROM node:22-alpine

RUN apk add --no-cache dumb-init curl

RUN addgroup -g 1001 appuser && \
  adduser -u 1001 -G appuser -D appuser

WORKDIR /app

COPY --chown=appuser:appuser --from=builder /app/.output ./.output

USER appuser
ENV NODE_ENV=prod
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -fs -o /dev/null http://localhost:3000/ || exit 1

CMD ["dumb-init", "node", ".output/server/index.mjs"]
