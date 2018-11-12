let path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'public/src/js'),
    entry: './index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development',
    watch: true,
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }

            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 9000
    }
}