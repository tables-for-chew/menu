FROM node:latest

RUN mkdir -p /src/newapp2

WORKDIR /src/newapp2

COPY . /src/newapp2

RUN npm install

EXPOSE 3031

CMD ["npm", "start"]
