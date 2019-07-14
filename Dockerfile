FROM node:latest

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY . .
COPY package.json .
# COPY src/kafka/topics.json src/kafka/
# COPY wait-for-it.sh .
# RUN chmod +x ./wait-for-it.sh

RUN npm install -g prisma
RUN npm install --silent
RUN npm install -g nodemon

# RUN PRISMA_MANAGEMENT_API_SECRET="softkey"  prisma deploy
