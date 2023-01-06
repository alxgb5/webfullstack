FROM node:18-alpine

WORKDIR /app

COPY ./my-lib-ui /app/my-lib-ui
COPY ./vitrine /app/vitrine

WORKDIR /app/my-lib-ui

RUN npm i && npm run rollup

WORKDIR /app/vitrine

RUN npm i && npm i ../my-lib-ui && npm run build

CMD ["npm", "run", "dev"]
