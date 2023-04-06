const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const deps = require("./package.json").dependencies;
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

module.exports = (_, argv) => ({
  output: {
    publicPath: {
      "/":
        argv.mode === "development"
          ? "http://localhost:3000/"
          : "https://remote-library-react-template-two.vercel.app/",
      "/images/": "./public/",
    },
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(json)$/i,
        use: [
          {
            loader: "json-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|md)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "markdown-loader",
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-hot-loader/webpack",
          },
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "custom_library",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Sample": "./src/components/SampleComponent/SampleComponent.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./web.config", to: "web.config" }],
    }),
  ],
});
