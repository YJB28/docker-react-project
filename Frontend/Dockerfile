FROM node:lts-alpine as build 

WORKDIR /app

COPY package.json .
RUN npm install 
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 

COPY --from=build /app/build /usr/share/nginx/html 







#old

# # Use an official Node.js runtime as a parent image
# FROM node:14.15.4-alpine

# # Set the working directory to /app
# WORKDIR /app

# # Copy the package.json and package-lock.json to /app
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Copy the application code to /app
# COPY . .

# # Expose the port that the application is listening on
# EXPOSE 3000

# # Start the application
# CMD ["npm", "start"]# Use an official Node.js runtime as a parent image
# FROM node:14.15.4-alpine

# # Set the working directory to /app
# WORKDIR /app

# # Copy the package.json and package-lock.json to /app
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Copy the application code to /app
# COPY . .

# # Expose the port that the application is listening on
# EXPOSE 3000

# # Start the application
# CMD ["npm", "start"]
