'use strict';

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function () {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input name="firstName" label="First Name" placeholder="First Name"
                    value={this.props.author.firstName}
                    error={this.props.errors.firstName}
                    onChange={this.props.onChange} />

                <Input name="lastName" label="Last Name" placeholder="Last Name"
                    value={this.props.author.lastName}
                    error={this.props.errors.lastName}
                    onChange={this.props.onChange} />

                <button type="submit" className="btn btn-default"
                    onClick={this.props.onSave}>Save</button>
            </form>
        );
    }
});

module.exports = AuthorForm;
