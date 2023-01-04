FROM node:16

# Create app directory
WORKDIR /var/www

# RUN npm install
RUN npm install -g supervisor
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8000
CMD [ "npm", "run", "watchserver" ]
