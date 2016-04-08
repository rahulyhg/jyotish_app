'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

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

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 300
    },

    devtool: NODE_ENV == 'production' ? "source-map" : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.EnvironmentPlugin('NODE_ENV'),
        new ngAnnotatePlugin({ add: true }),
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: {
        //         except: ['$', 'exports', 'require', '$inject', 'import']
        //     }
        // })
        // }})
        // compress: {
        //     warnings: false,
        //     drop_console: true,
        //     // mangle: false
        //     // unsafe: true
        // },
        // mangle: {
        //     except: ['$', 'exports', 'require', '$inject', 'import']
        // }

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.css', '.html']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js', '.css', '.html']
    },

    module: {
        loaders: [{
            test: /\.js$/,            
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-0']
            },
        },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.html$/, loader: 'html' },
        { test: /\.(woff|woff2|ttf|svg|eot)$/, loader: 'url' }
    ]
}
}

// console.log(new Date.now())

// if (NODE_ENV != 'production') {
//     module.exports.plugins.push(

//     )
// }
