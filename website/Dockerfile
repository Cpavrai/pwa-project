### Install front
FROM node:latest as front-install
WORKDIR /app

# Need python2 for scss
RUN apt update; apt upgrade -y; apt install -y python

COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY angular.json server.ts tsconfig.json tslint.json webpack.server.config.js ./

### Build front
FROM front-install as front-build
COPY src ./src
RUN npm run build:ssr

CMD ["npm", "run", "serve:ssr"]

EXPOSE 8000
