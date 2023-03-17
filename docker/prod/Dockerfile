FROM node:18-alpine as build-stage

ENV NODE_ENV=production

RUN mkdir -p /usr
RUN chmod -R 777 /usr

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

ADD . /usr/src/app/

RUN npm ci --omit=dev

RUN npx prisma generate

RUN npm run build

EXPOSE 3030

CMD ["npm", "run", "start"]
