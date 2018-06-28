import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const config = [
    // browser-friendly UMD build
    {
        input: 'src/index.js',
        output: {
            name: "lander",
            file: pkg.browser,
            format: 'umd',
            sourcemap: true
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
                plugins: ['external-helpers'],
            }),
            resolve(),
            commonjs(),
            replace({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            })
        ]
    },
    // CommonJS (for Node) and ES module (for bundlers) build.
    {
        input: 'src/index.js',
        output: [
            { file: pkg.main, format: 'cjs', sourcemap: true },
            { file: pkg.module, format: 'es', sourcemap: true }
        ]
    }
];

export default config;