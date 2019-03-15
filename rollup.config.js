import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.js',
    output: {
      dir: 'module',
      format: 'esm',
    },
    preserveModules: true,
    plugins: [
      postcss(),
      babel({
        exclude: ['node_modules/**'],
        presets: ['@babel/preset-react']
      }),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'bundle/bundle.js',
      format: 'esm',
    },
    plugins: [
      postcss(),
      babel({
        exclude: ['node_modules/**'],
        presets: ['@babel/preset-react']
      }),
    ],
  },
];
