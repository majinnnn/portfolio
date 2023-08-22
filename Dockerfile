FROM node:20.5-alpine

RUN apk update && apk add bash
RUN /bin/bash
WORKDIR /usr/src/app

COPY . .

CMD ["npm", "run", "dev"]