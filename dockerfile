FROM node:22.10.0 AS node

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

RUN yarn run build

FROM nginx:1.26.2 AS nginx

WORKDIR /etc

COPY --from=node /app/dist /usr/share/nginx/html

COPY ./nginx/nginx.conf ./nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]