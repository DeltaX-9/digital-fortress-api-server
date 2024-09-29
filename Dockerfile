# Use an official Node.js runtime as a parent image
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .


# Expose the port (placeholder, actual port will be passed via docker-compose)
EXPOSE 5555

# Command to run the application
CMD ["npm", "start"]