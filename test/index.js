var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var assert = require('should').assert;
//var entry = require('./test.component');

// + test multiple classes

describe('react-svg-inline-loader', function() {
    //this.timeout(5000);
    it('Should inline SVG', function(done) {
        var config = {
            resolve: {
                root: [__dirname]
            }
        };

        webpack({
            entry: './test/fixtures/test.component.js',
            resolve: config.resolve,
            target: 'web',
            output: {
                path: path.join(__dirname, 'output'),
                filename: 'bundle.js'
            },
            resolveLoader: {
                alias: {
                    'react-svg-inline-loader': path.join(__dirname, "../src/loader.js")
                }
            },
            module: {
                loaders: [{
                    test: /\.svg$/,
                    exclude: /(node_modules)/,
                    loaders: ['react-svg-inline-loader']
                }]
            }
        }, function onCompilationFinished(err, stats) {
            var actualMap;

            if (err) {
                return done(err);
            }
            if (stats.hasErrors()) {
                return done(stats.compilation.errors[0]);
            }
            if (stats.hasWarnings()) {
                return done(stats.compilation.warnings[0]);
            }

            fs.unlinkSync(path.join(__dirname, 'output', 'bundle.js'));
            done();
        });
    });

});

