# STEP 0 - A simple Angular App

First of all, let's start with a really simple Angular app to refactor to a React one.

## Getting started

Simply clone the repo and run successively :
```
$ npm install
$npm run start

```

It will run the ```webpack-dev-server```. And then open your browser at [localhost:3000/feed](http://localhost:3000/feed) and you should see the Angular app running.

## Client Architecture

The Angular app is described in the ```client/app.js``` file. It's doing all the Angular configuration steps for us:

  1. Define the app : ```angular.module('theApp', ['ui.router'])```
  2. Define the routes and generate states with with UI-Router synthax
  3. Register under the angular object some ```$compilerProvider``` function needed for lazy loading.
  4. Bootstrap the app. We need to do it manually here for refactoring later (use ```angular.bootstrap``` instead of ```ng-app```)

The differents pages are defined under the ```client/pages``` folder containing for each one a module file, a controller and a template. For more details about how it's working, check the documentation of UI-Router about code-splitting and lazy loading.

## Server Architecture

It's a simple EXPRESSJS server rendering the ```server/view/index.ejs``` file where the ```ui-view``` tag render the routes. In this project, the ```webpack-dev-server``` is used as well and configured in ```server/start.js```.


## Next steps

Once you get familiar with the angular basic app, let's refactor one component. Go to the next TAG ;)
