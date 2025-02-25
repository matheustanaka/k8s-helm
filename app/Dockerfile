# build stage
FROM node:slim

WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 3000

ENV POSTGRES_HOST=postgres

CMD ["npm", "run", "start"]
