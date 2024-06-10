FROM node:20.13.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install --only=dev && npm run build

# RUN npx sequelize-cli db:migrate

EXPOSE ${NODE_PORT}

ENV NODE_ENV=production

CMD ["npm", "start"]
