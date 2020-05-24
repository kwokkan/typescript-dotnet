const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PnpWebpackPlugin = require("pnp-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
    mode: isProd ? "production" : "development",

    // Enable sourcemaps for debugging webpack's output.
    devtool: false,

    entry: "./src/index.ts",

    target: "node",

    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./dist"),
        devtoolModuleFilenameTemplate: "/src/[resource-path]?[loaders]",
        jsonpFunction: "wj"
    },

    cache: true,

    bail: true,

    //watch: true,
    watchOptions: {
        ignored: [
            "node_modules"
        ]
    },

    optimization: {
        minimize: isProd,
        sideEffects: true,
        usedExports: true,
    },

    resolve: {
        extensions: [".ts", ".js"],

        plugins: [
            PnpWebpackPlugin,
        ],
    },

    resolveLoader: {
        plugins: [
            PnpWebpackPlugin.moduleLoader(module),
        ],
    },

    plugins: [
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve("cache-loader"),
                    },
                    {
                        loader: require.resolve("ts-loader"),
                    }
                ]
            }
        ]
    }
};
