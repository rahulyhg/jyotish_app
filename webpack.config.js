'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

// let appFolder = fs.readdirSync(path.join(__dirname, 'public/app/Components'))
//     .concat(fs.readdirSync(path.join(__dirname, 'public/app/services')))
//     .map(x => path.resolve(__dirname, `.public/app/${x}`)).sort();

// console.log(appFolder);
module.exports = {
    context: '',
    entry: {
        // mail: "./public/app/Components/mail/mail",
        // services: "./public/app/services/mailapi/mailapi",
        app: "./app/app"
    },
    output: {
        path: __dirname + '/app',
        filename: "dist/[name].js",
        library: '[name]'
    },

    watch: NODE_ENV == 'production',

    watchOptions: {
        aggregateTimeout: 300
    },

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.EnvironmentPlugin('NODE_ENV'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js','.css','.html']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js', '.css','.html']
    },

    module: {
        loaders: [{
                test: /\.js$/,
                // include: appFolder,
                exclude: /node_modules/,
                loader: 'babel?presets[]=es2015,plugins[]=transform-es2015-modules-commonjs'
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.html$/, loader: 'html'},
            {test: /\.(woff|woff2|ttf|svg|eot)$/, loader: 'url'}
        ]
    }
}

console.log(module.exports.output)

if (NODE_ENV != 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}
