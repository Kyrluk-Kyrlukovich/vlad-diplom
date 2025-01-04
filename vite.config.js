import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      include: [
        /\.[tj]sx?$/, // поддержка .ts, .tsx, .js, .jsx
        /\.vue$/, // поддержка .vue
        /\.vue\?vue/, // поддержка SFC (Single File Component)
      ],
      imports: [
        // Предустановленные импорты
        "vue",
        "vue-router",
        {
          "@vueuse/core": ["useMouse", ["useFetch", "useMyFetch"]],
          axios: [["default", "axios"]],
        },
      ],
      eslintrc: {
        enabled: true, // Создаст eslintrc-auto-import.json
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  esbuild: {
    // Включаем поддержку всех современных возможностей JavaScript
    target: 'esnext', // Поддержка современных возможностей JS
  },
  build: {
    target: 'esnext', // сборка с поддержкой современных браузеров
  },
});
