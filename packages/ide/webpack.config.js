const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isHMR = Boolean(isDev && process.env.WEBPACK_DEV_SERVER)

const rootPath = (...args) => path.resolve(__dirname, ...args)

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/cdn.tsx',
    context: rootPath(),
    output: {
        path: rootPath('umd'),
        library: 'experimentsIDE',
        libraryTarget: 'umd',
        filename: isDev ? 'experiments-ide.js' : 'experiments-ide.min.js',
        globalObject: 'this'
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json', '.ts', '.tsx' ],
        fallback: {
            "assert": false
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: [ { loader: 'babel-loader' } ],
                exclude: /\.(d\.ts|d\.ts\.map|spec\.tsx)$/
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: rootPath('resources', 'index.html'),
            inject: 'head',
            scriptLoading: 'blocking',
            filename: (isDev && !isHMR) ? 'dev.html' : 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'experiments-ide.css' : 'experiments-ide.min.css',
            chunkFilename: '[id].css'
        }),
    ]
}
