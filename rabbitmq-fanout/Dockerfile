FROM node:18-alpine




WORKDIR /bank-creation-catalog


COPY ./package*.json ./

# Installing dependencies
RUN npm install

# Copying the code from the current directory to the working directory in Docker
COPY . .

# Exposing the port on which our banks-creation-app application listens
EXPOSE 8081

# Starting the Node.js application
CMD ["npm", "run", "dev"]
