const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const loader = require('sass-loader')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        assetModuleFilename: "images/[hash][ext][query]",
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource",
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            test: /\.s?css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: { publicPath: "" }
                },
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    target: 'web',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'source-map'
}
