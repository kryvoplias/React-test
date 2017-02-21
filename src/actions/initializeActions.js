'use strict';

var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');
var Dispatcher = require('../dispatcher/appDispatcher');

var InitializeActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitializeActions;
