#################################################################################################
# To create the image: 
# docker build --build-arg NODE_ENV=development -t myapp -f Dockerfile .
# To run the image in local : docker run -p 11221:11221 myapp:latest
#################################################################################################

FROM node:boron
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 3000

ARG NODE_ENV=NODE_ENVIRONMENT
ENV NODE_ENV ${NODE_ENV}
RUN echo $NODE_ENV

CMD ["node", "server.js"]
