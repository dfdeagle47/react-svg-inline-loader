var React = require('react');

module.exports = function(props) {
    const baseProps = {
        className: '{% className %}',
        dangerouslySetInnerHTML: {
            __html: '{% svgElement %}'
        }
    };

    return React.createElement('i', Object.assign({}, baseProps, props));
};
