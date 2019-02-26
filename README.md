# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

To get started:

- Install dependencies (see below)
- Add style sheet in html file 
- To seed data: 

```sh 
1. <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"> 
2. (open your MySQL) mysql -u root -p < schema.sql 
2. node server/db/seed.js
```

In a static index.html page, include the following:
A script tag which invokes ReactDom.render on 'menu'
A script tag with source http://localhost:3030/bundle.js

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g nodemon
npm install
```
# Dev Environment 

Run server in nodemon to continuously watch for changes. Run webpack to continuously transpile to the server's entrypoint:

npm run server
npm run react-dev

## Testing
This application uses the Jest framework with Enzyme library for testing:

npm run test

