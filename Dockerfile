FROM node:17-alpine
RUN apk update && apk add git
WORKDIR /app
COPY package.json /app
RUN npm install
CMD npm run start
EXPOSE 888