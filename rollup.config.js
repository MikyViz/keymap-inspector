import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/keymap-inspector.esm.js',
      format: 'es',
      sourcemap: true
    },
    plugins: [
      nodeResolve(),
      typescript({
        declaration: true,
        declarationDir: './dist/types',
        rootDir: './src',
        module: 'esnext'
      })
    ]
  },
  
  // UMD build for browsers
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/keymap-inspector.umd.js',
      format: 'umd',
      name: 'KeymapInspector',
      sourcemap: true
    },
    plugins: [
      nodeResolve(),
      typescript({
        declaration: false,
        module: 'esnext'
      })
    ]
  }
];
