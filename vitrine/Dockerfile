FROM node:18-alpine

WORKDIR /app

COPY ./my-lib-ui /app/my-lib-ui
COPY ./vitrine /app/vitrine

WORKDIR /app/my-lib-ui

RUN npm i && npm run rollup

WORKDIR /app/vitrine

RUN npm i && npm i ../my-lib-ui && npm run build

WORKDIR /app

COPY dockerfile_cmd.sh dockerfile_cmd.sh
RUN chmod +x dockerfile_cmd.sh
CMD sh dockerfile_cmd.sh
