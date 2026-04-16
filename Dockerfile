FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ✅ Build the app
RUN npm run build

# ✅ Install a static server
RUN npm install -g serve

EXPOSE 8080

# ✅ Serve production build
CMD ["serve", "-s", "dist", "-l", "8080"]