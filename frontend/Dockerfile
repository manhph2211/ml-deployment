FROM --platform=linux/amd64 node:14-alpine

WORKDIR /app

COPY *.json ./
COPY yarn.lock ./
RUN npm install

COPY . ./

EXPOSE 3000
CMD ["npm", "start"]