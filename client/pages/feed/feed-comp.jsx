var React = require('react')

var FeedComp = function () {
  return React.createClass({

    render () {
      const var1 = 'The bindings are workings'

      return <div>
        <h1>My future feed Module</h1>
        <h3>Binded with angular controller {var1}</h3>
      </div>
    }
  })
}

export default FeedComp
