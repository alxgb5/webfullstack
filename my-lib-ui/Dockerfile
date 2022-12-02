FROM node:18-alpine

WORKDIR /app

COPY ./my-lib-ui /app/my-lib-ui

WORKDIR /app/my-lib-ui

RUN npm i

CMD ["npm", "run", "storybook"]
