var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    debug: true,
    devtool: '#inline-source-map',
    entry: [
        './src/app.js',
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    __dirname,
                    path.join(__dirname, '..', 'src'),
                ],
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            }
        ],
    },
};