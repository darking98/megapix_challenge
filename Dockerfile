FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js
COPY jsconfig.json ./jsconfig.json

COPY pages ./pages
COPY public ./public
COPY assets ./assets
COPY components ./components
COPY context ./context
COPY functions ./functions
COPY hooks ./hooks
COPY routes ./routes
COPY styles ./styles
COPY utils ./utils


CMD ["npm", "run", "dev"]