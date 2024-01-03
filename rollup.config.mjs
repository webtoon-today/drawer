import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default [
    {
        input: 'src/main.ts',
        output: {
            file: './index.js',
            format: 'cjs'
        },
        plugins: [
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                inject: true,
                extensions: ['.css', '.scss'],
            })
        ]
    }
];