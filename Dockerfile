FROM node:latest

WORKDIR /app

COPY . /app/

RUN npm update && npm install && npm i -g @angular/cli && npm rebuild node-sass

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
