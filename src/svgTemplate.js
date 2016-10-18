var React = require('react');

module.exports = React.createClass({
    render: function() {
        var baseProps = {
            className: '{% className %}',
            dangerouslySetInnerHTML: {
                __html: '{% svgElement %}'
            }
        };
        var props = Object.assign({}, baseProps, this.props);
        return React.createElement('i', props);
    }
});
