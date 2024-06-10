FROM node:20.13.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install --only=dev && npm run build

# RUN npm run db:migrate

EXPOSE ${NODE_PORT}

ENV NODE_ENV=development

CMD ["npm", "start"]
