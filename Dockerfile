# Stage 1: Build the React app
FROM node:lts as builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --ignore-scripts

# Copy the rest of the application code and build the app
COPY . .
RUN npm run build

# Stage 2: Create the production image
FROM nginx:latest

# Copy build artifacts from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Run Nginx in the foreground as a non-root user
CMD ["nginx", "-g", "daemon off;"]