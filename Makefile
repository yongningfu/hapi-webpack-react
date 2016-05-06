BIN=./node_modules/.bin

all: build

# webpack-server:; $(BIN)/babel-node ./src/server/webpack.js
webpack-server:; $(BIN)/webpack-dev-server --config webpack.config.js --colors --devtool eval --hot --inline --content-base build/ --history-api-fallback
dev-server:; $(BIN)/nodemon --exec $(BIN)/babel-node -- server/server.js
prod-server: build; NODE_ENV=production $(BIN)/babel-node server/server.js

build:; $(BIN)/webpack --progress
clean:; rm -rf .dev

.PHONY: all build clean dev-server webpack-server
