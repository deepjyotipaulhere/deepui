import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        react(),
        dts({ insertTypesEntry: true }),
        // viteStaticCopy({
        //     targets: [
        //         {
        //             src: 'src/components/**/**/*.css', // adjust path if needed
        //             dest: 'styles'
        //         }
        //     ]
        // })
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'DeepUI',
            formats: ['es'],
            fileName: (format) => `deepui.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'style[extname]'; // Output as style.css
                    }
                    return '[name][extname]';
                },
            },
        },
        cssCodeSplit: true, // Bundle all CSS into a single file
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            },
            format: {
                comments: false
            }
        }
    },
})
