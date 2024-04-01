import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import less from 'less'
import cssnano from 'cssnano'
import postcssLess from 'postcss-less'

export default {
  input: './src/index.js',
  output: {
    file: './lib/index.js',
    format: 'esm',
  },
  plugins: [
    babel(),
    postcss({
      minimize: true,
      modules: true,
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true },
      },
      extract: true,
    }),
  ],
  external: [
    'react',
    'react-dom',
    'prop-types',
    'classnames',
    '@ant-design/icons',
  ],
}
