// @ngInject
function loadDependencies ($q) {
  let deferred = $q.defer()
  require.ensure([
    './profile.controller.js',
    './profile.html'
  ], require => {
    deferred.resolve({
      controller: require('./profile.controller.js'),
      template: require('./profile.html')
    })
  })

  return deferred.promise
}

var profileModule = /* @ngInject */ {
  base: /* @ngInject */ {
    url: '/profile',
    templateProvider: provider => provider.template,
    controllerProvider: provider => provider.controller,
    controllerAs: 'vm',
    resolve: /* @ngInject */ {
      provider: loadDependencies
    }
  },
  details: /* @ngInject */ {
    url: '/profile/:profile_id',
    templateProvider: provider => provider.template,
    controllerProvider: provider => provider.controller,
    controllerAs: 'vm',
    resolve: /* @ngInject */ {
      provider: loadDependencies
    }
  }
}

export default profileModule
