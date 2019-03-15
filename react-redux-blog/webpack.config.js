var path = require('path');
module.exports = {
    entry: './src/app.js',
    devtool: 'sourcemap',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }]
    }
};