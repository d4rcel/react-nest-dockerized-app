FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

# Add wait-for-it script
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm run build

# Wait for db before starting
CMD ["/wait-for-it.sh", "db:5432", "--", "pnpm", "run", "start:dev"]
