# webpack相关知识点

## clean-webpack-plugin
 清除打包后的文件
 
 ## html-webpack-plugin
  以本地html作为模板
  
 ## mini-css-extract-plugin
 将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。
 
 ## css-minimizer-webpack-plugin
 这个插件使用 cssnano 优化和压缩 CSS
 
 ## webpack-bundle-analyzer
 打包文件分析工具
 
 示例：
 ```js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[id].[contenthash:8].css',
        ignoreOrder: true, // Enable to remove warnings about conflicting order
      }),
      new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          generateStatsFile: true,
          statsOptions: { source: false },
        }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
      }), 
  ],
};
```

## prettier 代码格式化工具
```
npm install -D prettier
```
```json
 {
	// 一行最多多少个字符
	printWidth: 150,
	// 指定每个缩进级别的空格数
	tabWidth: 2,
	// 使用制表符而不是空格缩进行
	useTabs: true,
	// 在语句末尾打印分号
	semi: true,
	// 使用单引号而不是双引号
	singleQuote: true,
	// 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
	quoteProps: 'as-needed',
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false,
	// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	trailingComma: 'none',
	// 在对象文字中的括号之间打印空格
	bracketSpacing: true,
	// jsx 标签的反尖括号需要换行
	jsxBracketSameLine: false,
	// 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
	arrowParens: 'always',
	// 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
	rangeStart: 0,
	rangeEnd: Infinity,
	// 指定要使用的解析器，不需要写文件开头的 @prettier
	requirePragma: false,
	// 不需要自动在文件开头插入 @prettier
	insertPragma: false,
	// 使用默认的折行标准 always\never\preserve
	proseWrap: 'preserve',
	// 指定HTML文件的全局空格敏感度 css\strict\ignore
	htmlWhitespaceSensitivity: 'css',
	// Vue文件脚本和样式标签缩进
	vueIndentScriptAndStyle: false,
	// 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
	endOfLine: 'lf',
}

```

## eslint 代码校验工具

```
npm install -D eslint
npm install -D eslint-webpack-plugin
npm install -D eslint-config-prettier // 解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效
npm install -D eslint-plugin-prettier // 将prettier作为ESLint规范来使用

// vue 环境
npm install -D eslint-plugin-vue
npm install -D vue-eslint-parser

// react 环境
npm install -D eslint-plugin-react
npm install -D eslint-plugin-react-hooks

// 如果是ts环境还需要安装以下插件
npm install -D @typescript-eslint/parser // ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
npm install -D @typescript-eslint/eslint-plugin // ESLint插件，包含了各类定义好的检测Typescript代码的规范
```
