/*global require, module*/
var React = require('react');

var Slide = React.createClass({
    propTypes: {
        id: React.PropTypes.any.isRequired,
        title: React.PropTypes.string,
        text: React.PropTypes.node
    },

    render: function() {
        var titleElement = (this.props.id && this.props.title &&
                            (
                                <h2 className="slide__description_title">
                                    {this.props.id}. {this.props.title}
                                </h2>
                            ));

        var textElement = (
            <p className="slide__description__text">
              {this.props.text}
            </p>
        );

        return (
            <div className="slide" style={this.props.style}>
                <div className="slide__description">
                    {titleElement}
                    {textElement}
                </div>
                <div className="slide__image">
                    <img src={this.props.image} />
                </div>
            </div>
        );
    }
});

module.exports = Slide;
