
FROM node:22-alpine AS deps
WORKDIR /app

# Only install dependencies (faster layer caching)
COPY package*.json ./
# `npm ci` lock dosyası ile senkron olmadığında hata veriyor.
# Docker içinde daha esnek olması için burada `npm install` kullanıyoruz.
RUN npm install

FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production

# Build Next.js app
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5001

# Copy built app and node_modules
COPY --from=builder /app ./

EXPOSE 5001

CMD ["npm", "run", "start"]

