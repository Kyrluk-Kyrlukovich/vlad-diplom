import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),

        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: [
                // presets
                'vue',
                'vue-router',
                // custom
                {
                    '@vueuse/core': [
                        // named imports
                        'useMouse', // import { useMouse } from '@vueuse/core',
                        // alias
                        ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
                    ],
                    'axios': [
                        // default imports
                        ['default', 'axios'], // import { default as axios } from 'axios',
                    ],
                    '[package-name]': [
                        '[import-names]',
                        // alias
                        ['[from]', '[alias]'],
                    ],
                },
                // example type import
                {
                    from: 'vue-router',
                    imports: ['RouteLocationRaw'],
                    type: true,
                },
            ],
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],

})
