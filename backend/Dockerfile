FROM node:20.10.0

# packages
COPY ./package*.json .

# settings
COPY ./.env .

# server
COPY ./server ./server

# updates
RUN npm install

EXPOSE 3000

# start server
CMD ["node", "./server/app.js"]