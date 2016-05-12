# Angular to React
A guide explaining step by step how to migrate from an [AngularJS](https://angularjs.org/) with [UI Router](https://github.com/angular-ui/ui-router) to a [ReactJS](https://facebook.github.io/react/) app with [react-router](https://github.com/reactjs/react-router).

## Motivations
There's already really powerful libraries enabling the integrations of [ReactJS](https://facebook.github.io/react/) components in an [AngularJS](https://angularjs.org/) app such as [ngReact](https://github.com/ngReact/ngReact). It's working perfectly well and is awesome for a step-by-step refactoring.

However, it's not enabling to do the BIG SWITCH. After a certain point of refactoring, the Angular app will count more ng-react comp than Angular controller/template. And it's exaclty at this point you want to operate the SWITCH and have ReactJS taking control of your app.

This project will show you how to do this BIG SWITCH from a basic AngularJS app with UI Router to a ReactJS app with react-router. It's using ng-react for integrating React component in AngularJS but also a specific React components enabling the use of AngularJS in react-component.

Following this tutorial will help you to get rid of Angular, put react-router and giving you the opportunity to enjoy all the new libraries compatibles like Redux, React-hot-loader, Rx....

It's a time machine, welcome to 2016!

## Get started
For following this tutorial, you'll need to switch from tag to tag. Master is the most up-to-date (containing the final version of the app). Start by clone the project and run:

```
$ npm install
```

You will have all the dependencies of the project regard-less the branch you're one. Each time we need a new package, it'll be mentionned! For each branches you'll find all the explanations you need in the README.md of the branch. Happy coding!


## Project architecture
The architecture has been copied from [ReacToGo](http://github.com/PBRT/reactogo.git). You can find more details on the project home page. It's a really basic structure and assume you get knowledge with WEBPACK.

The initial skeletton of the app is a AngularJS app, manages by UI-Router, build by webpack and served by an EXPRESSJS server. It'll be the same from a architecture point of view at the end except it'll be managed by react-router.
