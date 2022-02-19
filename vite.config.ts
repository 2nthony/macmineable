import { defineConfig, UserConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config: UserConfig = {
    root: 'client',
    build: {
      outDir: path.join(__dirname, 'dist'),
      emptyOutDir: true,
    },
    resolve: {
      alias: {}
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess(),
      }),
    ],
  }

  if (command !== 'build') {
    config.resolve.alias = [
      {
        find: /^@svelte-use\/(.*)/,
        replacement: path.resolve(
          __dirname,
          '../svelte-use/packages/$1/dist/index.mjs',
        ),
      },
    ]
  }

  return config
})
