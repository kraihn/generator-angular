# Minimal Node.js build, remove -alpine for debian
FROM node:6-alpine

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install npm dependencies
COPY package.json /app/
RUN npm install

# Copy application files
COPY . /app

# Make dist mountable
VOLUME ["/app/dist"]

# Serving
EXPOSE 4200

# Livereload server
EXPOSE 49152

ENTRYPOINT ["npm"]
CMD ["--help"]
