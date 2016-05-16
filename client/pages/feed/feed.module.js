import angular from 'angular'

var feedModule = /* @ngInject */ {
  url: '/feed',
  templateProvider: provider => provider.template,
  resolve: /* @ngInject */ {
    provider ($q) {
      let deferred = $q.defer()
      require.ensure(
        ['./feed.html', './feed-comp.jsx'],
        require => {
          angular._factory('FeedComp', require('./feed-comp.jsx'))
          deferred.resolve({
            template: require('./feed.html')
          })
        })

      return deferred.promise
    }
  }
}

export default feedModule
