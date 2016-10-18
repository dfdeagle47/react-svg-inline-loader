# react-svg-inline-loader

## Disclaimer

Original author @nightwolfz (https://github.com/nightwolfz). However, the repo is not available on GitHub (anymore?).

Just putting it here for my own use.

## Description

Finds all svg files require'd in as a React Component and inlines them.

It should work with both the server-side rendering and on the browser.

## Usage (in your webpack.config.js)

	module: {
		loaders: [{
			test: /\.svg$/,
			exclude: /(node_modules)/,
			loaders: ['react-svg-inline-loader']
		}]
	}

## Usage in your react components

	var React = require('react')
	var SvgPicture = require('./picture.svg')

	class TestComponent extends React.Component {
		constructor(props, context) {
			super(props, context)
		}

		render() {
			return <SvgPicture className="big red icon"/>
		}
	}


## Requirements

    node (version 4 or higher)


## Installation

    npm install react-svg-inline-loader --save


## Tests

    mocha


## Dependencies

	Nothing external
