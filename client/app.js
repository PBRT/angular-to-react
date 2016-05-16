import angular from 'angular'
import 'angular-ui-router'

// Load style
require('./styles/app.css')

// ngReact
require('ngreact')

// Init
angular.module('theApp', ['ui.router', 'react'])

const Routes = {
  feed: require('./pages/feed/feed.module.js'),
  profileDetails: require('./pages/profile/profile.module.js').details,
  profile: require('./pages/profile/profile.module.js').base
}

// Config
angular.module('theApp').config(($stateProvider, $compileProvider, $provide, $locationProvider) => {
  $locationProvider.html5Mode(true)

  // function to lazily register factories @codeSplitting
  angular._factory = function (name, factory) {
    $provide.factory(name, factory)
  }

  // function to lazily register directives @codeSplitting
  angular._directive = $compileProvider.directive

  angular.forEach(Routes, function (route, key) {
    $stateProvider.state(key, Routes[key])
  })
})

// Run
angular.module('theApp').run(($rootScope, $state) => {
  // $rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
  //   console.log('route change')
  // })
})

// Bootstrap the app
angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['theApp'])
})
