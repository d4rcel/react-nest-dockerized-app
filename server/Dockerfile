FROM node:20

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm rebuild bcrypt
RUN pnpm run build

EXPOSE 3001
CMD ["pnpm", "run", "start:dev"]
