FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build || true

FROM node:18-alpine AS runtime
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev || npm install --production
COPY --from=build /app/app.js /app/app.js
COPY --from=build /app/routes /app/routes
COPY --from=build /app/models /app/models
COPY --from=build /app/errors /app/errors


FROM runtime AS runner
WORKDIR /app
COPY --from=runtime /app /app
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]
