FROM node:9.3.0-alpine
MAINTAINER SS Ribeiro

USER node
ENV NODE_ENV production
VOLUME /home/node/app
WORKDIR /home/node/app

EXPOSE 3000

CMD npm install \
 && rm -f ../.forever/*.log \
 && $(npm bin)/forever start -w --minUptime 10 --spinSleepTime 1000 index.js \
 && tail -f ../.forever/*.log
