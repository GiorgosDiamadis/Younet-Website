FROM node:18.7.0

WORKDIR /younet-digital

COPY package*.json ./

RUN npm install

COPY . .
CMD ["tail","-f","/dev/null"]