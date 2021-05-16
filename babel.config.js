module.exports = {
  presets: [
    "babel-preset-gatsby",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "~": "./src",
        },
      },
    ],
  ],
}
