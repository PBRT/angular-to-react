# STEP 1 - Refactor a section in React

Once of the most common approach for migrating from Angular to React is to refactor an Angular section in React and then using [ngReact](https://github.com/ngReact/ngReact)

Don't forget to run ```npm install``` again!

## Using ng-react

At this step, we add ```ng-react``` and ```react``` to the app. We need to modify our ```client/app.js``` to the following:
```angular.module('theApp', ['ui.router', 'react'])```for enabling to use ngReact. We also need to require it before ```require('ngreact')```.

## Refactoring the Feed

Here we refactored the feed component. You can see instead of having the controller of feed we have now only the ```feed-comp.jsx``` file. It's the refactoring from Angular to React.

At this point we still need to keep the template file. If you take a look at ```client/pages/feed/feed.html```, you can see there's only one line: ```<react-component name='FeedComp'/>```. It's the way of using React comp with Angular.

We also need to register this component as a factory for using it in our Angular app. For that, we simply modify our ```client/pages/feed/feed.module.js``` by adding the following line ```angular._factory('FeedComp', require('./feed-comp.jsx'));```.

We are registering our FeedComp as a factory to our angular app. If you check the ```app.js``` file, you can see at the config time we register the ```angular._factory``` function. It's because here we want to register this factory dynamically (i.e. after the angular app has been boostrapped). That's why we keep a track of this functions available at the config for later use:
```
  // function to lazily register factories @codeSplitting
  angular._factory = function (name, factory) {
    $provide.factory(name, factory)
  }

  // function to lazily register directives @codeSplitting
  angular._directive = $compileProvider.directive
```


## Sum up

1. We get rid of the angular controller.
2. We keep the template for injecting the new react component.
3. We get a React section in our Angular app

## Next steps

Let's let React take the controll of the app, go to the next tag!
