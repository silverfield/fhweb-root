# Intro

My personal web

Go to [the site](https://ferohajnovic.com/)


## Installation & run

Npm needs to be installed first on the OS

The dependencies are managed via NPM:
- install the packages with `npm install`
- run `npm run both` to build, serve and watch for changes
    - if it doesn't work, try `npm run start:dev`
- run `npm run publish` to publish to GitHub

Others:
- run `npm run build` to re-build the `dist` folder
- run with `npm run start:dev` and access the app in the browser
- `./node_modules/http-server/bin/http-server -c-1 dist/` to serve (todo?)

The solution uses Webpack to build the final `bundle.js`, compile SCSS
stylesheets etc.
