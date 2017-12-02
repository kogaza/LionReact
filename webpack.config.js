//Konfiguracja Webpack
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./src/jsx/index.jsx","./src/scss/style.scss"],
    output: { filename: "./dist/js/out.js" },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    watch: true,

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2', 'react'] }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })

            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/css/style.css')

    ]
};
