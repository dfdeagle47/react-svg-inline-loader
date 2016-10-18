'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var createElement = require('react').createElement
var TestSVG1 = require('./icon-dialog.svg')
var TestSVG2 = require('./iconsettings.svg')
var TestSVG3 = require('./keyhome.svg')
var TestSVG4 = require('./keytrade-logo.svg')

class TestComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return createElement('div', null,
        [
            createElement('span', { key: 'svg-0' }, 'Test hello'),
            createElement(TestSVG1, { key: 'svg-1', className: 'eeee xxxx hg' }),
            createElement(TestSVG2, { key: 'svg-2' }),
            createElement(TestSVG3, { key: 'svg-3' }),
            createElement(TestSVG4, { key: 'svg-4' })
        ])
    }
}

ReactDOM.render(React.createElement(TestComponent), document.getElementById('root'))
