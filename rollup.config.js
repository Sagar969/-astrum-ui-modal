import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'es',
    },
    external: ['react', 'react-dom'],
    plugins: [
      postcss({
        // include: '**/*.css',
        // modules: true,
        // extract: true,
        // minimize: true,
        plugins: [
          simplevars(),
          nested(),
          cssnext({ warnForDuplicates: false }),
          cssnano(),
        ],
        extensions: ['.css'],
      }),
      typescript({ tsconfig: 'tsconfig.json' }),
      terser(),
    ],
  },
];
// export default defineConfig({
//   input: 'src/index.ts',
//   output: {
//     dir: 'dist',
//     format: 'es',
//     name: 'beyonderui',
//   },
//   external: ['react', 'react-dom'],
//   plugins: [
//     postcss({
//       // include: '**/*.css',
//       // modules: true,
//       // extract: true,
//       // minimize: true,
//       plugins: [
//         simplevars(),
//         nested(),
//         cssnext({ warnForDuplicates: false }),
//         cssnano(),
//       ],
//       extensions: ['.css'],
//     }),
//     typescript({ tsconfig: 'tsconfig.json' }),
//     babel(),
//   ],
// });
