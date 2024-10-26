FROM node:22.10.0 AS node

ARG VITE_DS_ENDPOINT=https://smapi.pv-api.sbc.space/ds-7429590172239724545/graphql

ARG VITE_NODE_ENV=dev

ENV VITE_DS_ENDPOINT=$VITE_DS_ENDPOINT

ENV VITE_NODE_ENV=$VITE_NODE_ENV

WORKDIR /app

COPY ./package.json ./package.json

COPY ./yarn.lock ./yarn.lock

RUN yarn install

COPY ./public ./public

COPY ./src ./src

COPY ./index.html ./index.html

COPY ./postcss.config.js ./postcss.config.js

COPY ./tailwind.config.js ./tailwind.config.js

COPY ./tsconfig.json ./tsconfig.json

COPY ./tsconfig.node.json ./tsconfig.node.json

COPY ./vite.config.ts ./vite.config.ts

CMD ["yarn", "run", "dev", "--host"]