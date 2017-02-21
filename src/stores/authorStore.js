'use strict';

var _ = require('lodash');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var m_authors = [];
var CHANGE_EVENT = 'change';
var ActionTypes = require('../constants/actionTypes');
var Dispatcher = require('../dispatcher/appDispatcher');

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: function () {
        return m_authors;
    },
    getAuthorById: function (id) {
        return _.find(m_authors, { id: id });
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            m_authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.CREATE_AUTHOR:
            m_authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(m_authors, { id: action.author.id });
            var existingAuthorIndex = _.indexOf(m_authors, existingAuthor);
            m_authors.splice(existingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(m_authors, { id: action.id });
            AuthorStore.emitChange();
            break;
        default:
        // nothing to do here
    }
});

module.exports = AuthorStore;
