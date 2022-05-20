const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main/main.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Match Three'
    })],
    watch: true
}