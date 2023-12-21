FROM node:current-bookworm

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "app.js"]
