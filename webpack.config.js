const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ESLintPlugin = require('eslint-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const { link } = require('fs')
const { options } = require('less')
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');




const paths = {
    build: 'build',
    src: 'src',

}




const optimization = (env, options) => {
    const isDev = options.mode === 'development';
    const isProd = !isDev;
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimize = true,
            config.minimizer = [
                new CssMinimizerPlugin(),
                new TerserWebpackPlugin()
            ]
    }

    return config
}

const filename = (ext, env, options) => options.mode === 'development' ? `[name].${ext}` : `[name].[fullhash].${ext}`

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //     hmr: isDev,
            //     reloadAll: true
            // },
        },
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            "@babel/plugin-syntax-dynamic-import"

        ]
    }

    if (preset) {
        opts.presets.push(preset)
    }

    return opts
}


const jsLoaders = () => {

    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }]



    return loaders
}



const plugins = (env, options) => {
    const isDev = options.mode === 'development';
    const isProd = !isDev;
    const base = [
        new HTMLWebpackPlugin({
            template: 'static/index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as(entry) {
                if (/\(fonts)$/.test(entry)) return 'font';
                if (/\.woff$/.test(entry)) return 'font';
                if (/\.png$/.test(entry)) return 'image';
                return 'script';
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, paths.src, 'static/assets/favicon.ico'),
                    to: path.resolve(__dirname, paths.build)
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css', env, options)
        }),
        new NodePolyfillPlugin()


    ]

    if (options.mode === 'production') {
        // base.push(new BundleAnalyzerPlugin())
        base.push(new CompressionPlugin({
            algorithm: "gzip",
            test: /\.(js|css)(\?.*)?$/i,
        }))

    }
    if (options.mode === 'development') {
        base.push(new ESLintPlugin())
    }
    return base
}

const config = (env, options) => {
    return {
        context: path.resolve(__dirname, paths.src),
        mode: 'development',
        entry: {
            main: ['@babel/polyfill', './app.jsx'],

        },
        output: {
            filename: filename('js', env, options),
            path: path.resolve(__dirname, paths.build)
        },
        resolve: {
            extensions: ['.js', '.json', '.png', '.jsx'],
            alias: {
                '@store': path.resolve(__dirname, paths.src, 'store'),
                '@': path.resolve(__dirname, paths.src),
                '@extensions': path.resolve(__dirname, paths.src, 'extensions'),
                '@img': path.resolve(__dirname, paths.src, 'static/assets/img'),
                '@downloads': path.resolve(__dirname, paths.src, 'static/downloads'),
            }
        },
        optimization: optimization(env, options),
        devServer: {

            port: 4200,
            hot: options.mode === 'development',
            compress: true
        },

        plugins: plugins(env, options),
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: cssLoaders()
                },
                {
                    test: /\.less$/,
                    use: cssLoaders('less-loader')
                },
                {
                    test: /\.s[ac]ss$/,
                    use: cssLoaders('sass-loader')
                },
                {
                    test: /\.(png|jpg|svg|gif|webp)$/,
                    loader: 'file-loader',
                    exclude: /downloads/,
                    options: {
                        outputPath: 'assets/img',
                    },
                },
                {
                    test: /.*(downloads).*\.*$/,
                    loader: 'file-loader',

                    options: {
                        outputPath: 'downloads',
                        name: '[name].[ext]'
                    }
                },
                {
                    test: /\.(ttf|woff|woff2|eot)$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/fonts',
                    },
                },
                {
                    test: /\.xml$/,
                    use: ['xml-loader']
                },
                {
                    test: /\.csv$/,
                    use: ['csv-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: jsLoaders()
                },
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: babelOptions('@babel/preset-typescript')
                    }
                },
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: babelOptions('@babel/preset-react')
                    }
                }
            ]
        }
    }
}

module.exports = (env, options) => {
    return config(env, options)
}