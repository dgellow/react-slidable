/*global require, module*/
var React = require('react/addons');

var Slidable = React.createClass({
    propTypes: {
        transitionSpeed: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            transitionSpeed: '1s'
        };
    },

    getInitialState: function() {
        return {
            trackWidth: null,
            slideWidth: null,
            current: 0
        };
    },

    handleClickLeft: function(ev) {
        var childrenCount = React.Children.count(this.props.children);

        ev.preventDefault();
        ev.stopPropagation();

        if (childrenCount <= 1) {
            return;
        }

        if (this.state.current === 0) {
            this.setState({
                current: childrenCount - 1
            });
        } else {
            this.setState({current: this.state.current - 1});
        }
    },

    handleClickRight: function(ev) {
        var childrenCount = React.Children.count(this.props.children);

        ev.preventDefault();
        ev.stopPropagation();

        if (childrenCount <= 1) {
            return;
        }

        if (this.state.current === (childrenCount - 1)) {
            this.setState({
                current: 0
            });
        } else {
            this.setState({current: this.state.current + 1});
        }
    },

    calculateTrackTranslate: function() {
        var wrapper = this.refs.wrapper;
        if (wrapper) {
            var width = wrapper.getDOMNode().offsetWidth,
                unit = 'px',
                x = -1 * (this.state.current) * width;
            return ''.concat('translate3d(', x, unit, ', 0, 0)');
        }

        return 0;
    },

    updateDimensions: function() {
        var childrenCount = React.Children.count(this.props.children),
            wrapperNode = this.refs.wrapper.getDOMNode();

        this.setState({
            trackWidth: wrapperNode.offsetWidth * childrenCount,
            slideWidth: wrapperNode.offsetWidth
        });
    },

    componentDidMount: function() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.updateDimensions);
    },

    render: function() {
        var slidableClass = "slidable",
            slidableClasses = this.props.className ?
                slidableClass.concat(" ", this.props.className) :
                slidableClass;

        var slides = React.Children.map(this.props.children, function(child, index) {
            var extraProps = {
                style: {
                    width: this.state.slideWidth
                },
                key: child.props.key,
                ref: child.props.ref
            };

            if (this.state.current === index) {
                extraProps.isActiveSlide = true;
            }

            if (!child.props.key) {
                var propsId = child.props.id;
                var childId = ((propsId === null) || (propsId === undefined)) ?
                              index :
                              propsId;
                extraProps.key = 'slide-' + childId;
            }

            return React.addons.cloneWithProps(child, extraProps);
        }, this);

        var trackStyle = {
            width: this.state.trackWidth,
            transform: this.calculateTrackTranslate(),
            transition: ''.concat('transform ',
                                  this.props.transitionSpeed)
        };

        return (
                <div className={slidableClasses}>
                    <div className="slidable__left">
                        <a href="#" onClick={this.handleClickLeft}>LEFT</a>
                    </div>
                    <div className="slidable__right">
                        <a href="#" onClick={this.handleClickRight}>RIGHT</a>
                    </div>
                    <div ref="wrapper" className="slidable__slides-wrapper">
                        <div ref="track" className="slidable__slides__track" style={trackStyle}>
                            {slides}
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = Slidable;
