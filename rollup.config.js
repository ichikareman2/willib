import {defineConfig} from 'rollup'
import html from '@rollup/plugin-html'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import {terser} from 'rollup-plugin-terser'
const config = defineConfig({
    // input: ['src/main.ts', 'src/second-entry.ts'],
    input: 'src/main.ts',
    output: [
        {
            // file: 'dist/bundle.js',
            dir: 'dist/',
            format: 'es',
            plugins: [
                // typescript()
            ]
        },
        // {
        //     // file: 'dist/bundle.min.js',
        //     // format: 'iife',
        //     name: 'version',
        //     plugins: [
        //         // typescript(),
        //         terser()
        //     ]
        // }
    ],
    plugins: [
        typescript(),
        json(),
        // terser(),
        html()
    ]
})

export default config;