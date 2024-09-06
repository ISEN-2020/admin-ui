# Base image
FROM node:16-alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory and change ownership
WORKDIR /app
COPY . .

# Install dependencies
RUN npm install

# Change ownership of the app files to non-root user
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose port and set the environment
EXPOSE 3000
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]