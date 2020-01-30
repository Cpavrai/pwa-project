### Install deps
FROM node:alpine as api-install
WORKDIR /app-build

COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY src/ .

### Build project
FROM api-install as api-build
RUN npm run build && npm prune --production

### Run node
FROM node:alpine as api-node
WORKDIR /app
COPY --from=api-build /app-build ./

EXPOSE 8000
CMD ["node", "build/app.js"]