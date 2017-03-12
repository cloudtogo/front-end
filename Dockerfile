FROM registry.cn-beijing.aliyuncs.com/ctgpub/alpine-node:4

ENV PORT 8079
EXPOSE 8079

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN npm install -g yarn && yarn install

COPY . /usr/src/app

# Start the app
CMD ["npm", "start"]
