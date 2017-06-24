FROM alpine:3.6

RUN apk add --no-cache \
    nodejs \
    nodejs-npm

ADD . /src

WORKDIR /src

RUN npm install

ENTRYPOINT node app.js
