import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
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
                minimize: true,
                extensions: ['.css', '.scss']
            }),
            {
                buildEnd() {
                  const fs = require('fs');
          
                  function getFileSizeInBytes(filename) {
                    const stats = fs.statSync(filename);
                    const fileSizeInBytes = stats.size;
                    return fileSizeInBytes;
                  }
          
                  const sizeBefore = getFileSizeInBytes('path/to/css/file.css');
                  //... minimize 적용 ...
                  const sizeAfter = getFileSizeInBytes('path/to/css/file.css');
          
                  console.log(`Before: ${sizeBefore} bytes`);
                  console.log(`After: ${sizeAfter} bytes`);
                  console.log(`Difference: ${sizeBefore - sizeAfter} bytes`);
                }
              }
        ]
    },
    {
        input: 'src/main.ts',
        output: {
            file: './index.d.ts',
            format: 'es'
        },
        plugins: [
            dts(),
            postcss({
                inject: false
            })
        ]
    }
];