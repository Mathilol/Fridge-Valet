FROM node:10

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
