const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


const filename = (ext) => isDev ? `[name].${ext}` : `[name].${ext}`;
const assetFilename = '[path][name][ext]';

const pathDirFile = isDev ? 'app' : 'dist';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, pathDirFile),
        filename: `./js/${filename('js')}`,
        assetModuleFilename: assetFilename,
        clean: true,
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'src'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            favicon: "./favicon.ico",
            template: path.resolve(__dirname, 'src/index.pug'),
            filename: "index.html",
        }),


        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),

        // new FileManagerPlugin({
        //     events: {
        //         onStart: {
        //             delete: ['dist'],
        //         },
        //         onEnd: {
        //             copy: [
        //                 {
        //                     source: path.join(__dirname, 'src/img/sprite-images'),
        //                     destination: path.join(__dirname, 'dist/img/sprite-images'),
        //                 },
        //                 {
        //                     source: path.join(__dirname, 'src/img/favicon'),
        //                     destination: path.join(__dirname, 'dist/img/favicon'),
        //                 },
        //             ],
        //         },
        //     },
        // }),

    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                },
            },
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev
                    },
                }, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: (resourcePath, context) => {
                            return path.relative(path.dirname(resourcePath), context) + '/';
                        },
                    }
                },
                    "css-loader",
                    'sass-loader'
                ],
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ico)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }
};
