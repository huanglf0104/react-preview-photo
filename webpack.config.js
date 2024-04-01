const path = require('path')

module.exports = {
  //编译的输入位置,是在项目目录下的src目录下的index.jsx,如果你使用纯js编写,那这个文件名当然就是index.js
  entry: './src/index.js',
  mode: 'production',
  //编译的输出设置
  output: {
    //编译后的入口文件(别人用你的包的时候,引用的文件的名字,一般都是index.js
    filename: 'index.js',
    //编译后的文件将被输出到哪个文件夹下 这里是当前项目目录下的build里面
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
  },
  module: {
    //简单理解为:在编译过程中遇到什么文件用什么工具/模块 来处理/编译 按照这样写即可.如果是ts编写,你还需要安装更多的组件.
    rules: [
      {
        //编译时找js或者jsx的文件
        test: /\.js|jsx$/,
        //不包含您这些文件夹/在遇到这些文件夹的时候,跳过.我们这里写了build是因为你编译过后的文件会在build文件夹里面,而编译过的文件你不能也不需要再编译了.
        exclude: /(node_modules|build)/,
        //当符合这样的文件格式和文件夹条件的时候,使用下面的编译组件和设置
        use: {
          //使用babel-loader
          loader: 'babel-loader',
          //使用babel-loader时候的设置
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'less-loader', // 将 Less 编译成 CSS
        ],
      },
      // ... 其他加载器配置
    ],
  },
  externals: ['react', 'react-dom', '@ant-design/icons', 'classnames'],
}
