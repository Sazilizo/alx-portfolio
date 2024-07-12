const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name]-bundle.js"
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
                // use: [
                //   {
                //     // loader: 'url-loader',
                //     options: {
                //       limit: 8192, // Images smaller than 8KB will be inlined as base64 strings
                //       name: '[name].[hash].[ext]', // Output path and name pattern
                //     },
                //   },
                //   //You can add file-loader here if you prefer to use it instead of url-loader for certain files
                //   {
                //     loader: 'file-loader',
                //     options: {
                //       name: 'images/[name].[hash].[ext]',
                //       esModule: true, // Use commonjs syntax
                //     },
                //   },
                // ],
              },
            ],
    },
    //this is obviously for the dev server
    devServer: {
        static: {
        directory: path.join(__dirname, 'public'), // Use 'static' instead of 'contentBase' in newer versions
        },
        compress: true,
        port: 3000,
        hot: true,
        open: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],  
}