FROM postgres

WORKDIR /usr/src/app

COPY package.json yarn.lock ./


RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5432

CMD ["node", "dist/app.js"]
