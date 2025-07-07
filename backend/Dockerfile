FROM node:24-alpine

# Set working directory
WORKDIR /app

COPY package*.json ./

# Install deps first
RUN npm install

COPY . .

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
