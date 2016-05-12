var feedModule = /* @ngInject */ {
  url: '/feed',
  templateProvider: provider => provider.template,
  controllerProvider: provider => provider.controller,
  resolve: /* @ngInject */ {
    provider ($q) {
      let deferred = $q.defer()
      require.ensure(
        ['./feed.controller.js', './feed.html'],
        require => {
          deferred.resolve({
            controller: require('./feed.controller.js'),
            template: require('./feed.html')
          })
        })

      return deferred.promise
    }
  }
}

export default feedModule
