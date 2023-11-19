FROM node:lts-alpine

# Install git
RUN apk add --no-cache git

# Create app directory
WORKDIR /usr/src/app

ARG REPO_URL=https://github.com/ohmcodes/ASADiscordGlobalChatNodeJS.git
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN git clone $REPO_URL .

COPY .env .env

RUN npm install 

CMD ["npm", "start"]