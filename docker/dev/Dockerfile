FROM node:18-alpine

ENV NODE_ENV=development

WORKDIR /usr/src

COPY . /usr/src

RUN npm ci

RUN npx prisma generate

EXPOSE 3030

CMD ["npm", "run", "dev"]
