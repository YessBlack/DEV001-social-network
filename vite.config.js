/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      root: 'src',
      // para hacer un deploy, configura propiedad base con el nombre/url de tu repo
      // https://vitejs.dev/guide/static-deploy.html#github-pages
      // ejemplo:
      // base: '/social-network/',
      build: {
        minify: false,
        rollupOptions: {
          output: {
            dir: './dist',
          },
          assetsDir: './assets/img',
        },
        // sourcemap: true,
      },
    };
  }
  return {};
});
