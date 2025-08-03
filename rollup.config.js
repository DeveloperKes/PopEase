import esbuild from "rollup-plugin-esbuild"

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true
    },
    plugins: [esbuild({
        target: "esnext",
        tsconfig: 'tsconfig.json'
    })],
    external: []
}