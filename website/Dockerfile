### Install front
FROM node:alpine as front-install
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY angular.json server.ts tsconfig.json tslint.json webpack.server.config.js ./

### Build front
FROM front-install as front-build
COPY src ./src
RUN npm run build:ssr

CMD ["npm", "run", "serve:ssr"]

EXPOSE 4200
