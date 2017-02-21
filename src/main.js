'use strict';

var React = require('react');
var routes = require('./routes');
var Router = require('react-router');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

Router.run(routes, /*Router.HistoryLocation,*/ function (Handler) {
    React.render(<Handler />, document.getElementById('app'));
});
