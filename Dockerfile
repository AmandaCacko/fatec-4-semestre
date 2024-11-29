

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV dev

WORKDIR /app

COPY . .
# Run the build script.
RUN npm i

EXPOSE 4173

# Run the application.
CMD ["npm", "run", "dev"]