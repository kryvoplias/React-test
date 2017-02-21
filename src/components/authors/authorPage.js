'use strict';

var React = require('react');
var Link = require('react-router').Link;

var AuthorList = require('./authorList');
var AuthorStore = require('../../stores/authorStore');

var Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    componentWillMount: function(){
        AuthorStore.addChangeListener(this.m_onChange);
    },
    componentWillUnmount: function(){
        AuthorStore.removeChangeListener(this.m_onChange);
    },
    m_onChange: function () {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },
    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default"> Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = Authors;
