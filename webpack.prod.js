const path = require("path");
const nodeExternals = require("webpack-node-externals");
const globImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: {
        app: ["./src/index.ts"],
    },
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
        filename: "design-system-react-components.min.js",
        library: "DesignSystemReactComponents",
        libraryTarget: "umd",
        // This allows a server-side app to import this package and not crash.
        globalObject: "this",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-inline-loader",
                    },
                ],
            },
            {
                test: /\.scss?$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, "./dist"),
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            importer: globImporter(),
                        },
                    },
                ],
                include: [path.resolve(__dirname, "./styles/**/*")],
            },
            {
                test: /\.(ttf|woff|eot|png|woff2|gif|jpg)(\?[\s\S]+)?$/,
                loader: "url-loader?limit=100000",
            },
        ],
    },
};
