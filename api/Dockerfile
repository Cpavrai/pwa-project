### Install deps
FROM node:alpine as api-install
WORKDIR /app-build

COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY src/ ./src

EXPOSE 8000
CMD ["npm", "run", "start"]