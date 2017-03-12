FROM registry.cn-beijing.aliyuncs.com/ctgpub/alpine-node:4-yarn
COPY . /usr/src/app
CMD ["npm", "start"]
