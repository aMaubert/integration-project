FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm update && npm install && npm install -g @angular-cli

EXPOSE 4200

CMD ["ng", "serve"]
