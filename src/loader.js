var fs = require('fs');
var utils = require('loader-utils');
var template = fs.readFileSync(__dirname + '/svgTemplate.js', 'utf-8');
var wrapperRegex = /<svg([^>]*)>(.*)<\/svg>/i;
var encodeURIComponentNode = typeof window !== 'undefined' ? encodeURIComponent : require("querystring").escape;

// Identity loader
module.exports = parseReactSVGElement;

/**
 * Webpack loader function. This is where the magic starts
 * @param source {string}
 * @returns {string}
 */
function parseReactSVGElement(source) {
    this.cacheable();

    var props = utils.parseQuery(this.query);
    var templ = {
        className: this.query.className || 'svg-icon'
    };

    for (var key in props) {
        if (hasOwnProperty.call(props, key)) {
            templ[key] = props[key];
        }
    }

    templ['svgElement'] = inlineSVG(source);
    const endResult = fromTemplate(template, templ);
    return endResult;
}

/**
 * Accepts SVG string as input and cleans it up
 * @param source {string}
 * @returns {string}
 */
function inlineSVG(source) {
    return source.replace(/'/g, '"')
        .replace(/fill="(.+?)"/gi, '')
        .replace(/<!--[\s\S]*?-->/g, ' ')
        .replace(/<\?xml.*?>/, '')
        .replace(/id="([a-z0-9\-_]+)"/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Load the template file and replace placeholder strings
 * @param input {string}
 * @param data {object} - Hashmap
 * @returns {string}
 */
function fromTemplate(input, data) {

    Object.keys(data).forEach(function(k) {
        input = input.replace('{% ' + k + ' %}', data[k]);
    })

    return input;
}
