FROM node:20.13.1
# mkdir app && cd app
WORKDIR /app

# COPY runmigrations.sh runmigrations.sh

# RUN chmod +x ./runmigrations.sh

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install --only=dev && npm run build

EXPOSE ${NODE_PORT}

ENV NODE_ENV=development

# RUN ./runmigrations.sh

# CMD ["npm", "run", "migrate", "&&", "npm", "start"]
CMD ["npm", "start"]
