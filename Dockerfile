# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including lucide-react)
RUN npm install

# Copy all project files
COPY . .

# Build the React app with Create React App
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from build stage to nginx
# Create React App builds to /app/build (not /app/dist)
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]