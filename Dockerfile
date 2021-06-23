FROM node:14.15.5

WORKDIR /usr/src/app

RUN export PATH=$PATH:/usr/src/app/node_modules/.bin

RUN npm install -g npm@7.13.0

COPY ["package.json", "package-lock.json"]

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]

