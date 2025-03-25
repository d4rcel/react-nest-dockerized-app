FROM node:20-alpine
WORKDIR /app

# Install build dependencies required for native modules
RUN apk add --no-cache python3 make g++

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --force

COPY . .
RUN pnpm run build

# Force rebuild of native modules, specifically bcrypt
RUN pnpm rebuild bcrypt

EXPOSE 3001
CMD ["pnpm", "run", "start:dev"]

