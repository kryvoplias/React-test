'use strict';

var authors = require('./authorData').authors;
var _ = require('lodash');

var generateId = function (author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var clone = function (item) {
    return JSON.parse(JSON.stringify(item));
};

var authorApi = {
    getAllAuthors: function () {
        return clone(authors);
    },
    getAuthorById: function (id) {
        var author = _.find(authors, { id: id });
        return clone(author);
    },
    saveAuthor: function (author) {
        console.log('Pretend this just saved the author to the DB via AJAX call...');
        if (author.id) {
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
            authors.splice(existingAuthorIndex, 1, author);
        }
        else {
            author.id = generateId(author);
            authors.push(author);
        }
        return clone(author);
    },
    deleteAuthor: function (id) {
        console.log('Pretend this just deleted the author from the DB vai an AJAX call...');
        _.remove(authors, { id: id });
    }
};

module.exports = authorApi;
