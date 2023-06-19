FROM node:18.3-alpine as builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:1.21.1-alpine

COPY --from=builder /app/build /usr/share/nginx/html
