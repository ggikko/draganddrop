var webpack = require("webpack");

module.exports = {
    watch: true,

    devtool: "#inline-source-map",

    entry: "./src/app.js",

    output: {
        path: __dirname,
        filename: "/js/bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};