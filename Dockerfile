FROM mcr.microsoft.com/playwright:v1.48.2-jammy
# FROM mcr.microsoft.com/playwright:v1.46.0-noble

WORKDIR /pw-tests

COPY package.json .

RUN npm install

COPY . .

CMD ["npx", "playwright", "test", "--project=api"]