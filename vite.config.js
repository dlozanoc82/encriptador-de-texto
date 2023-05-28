import { defineConfig } from 'vite';

export default defineConfig({
  // ...otras opciones de configuración

  rollupInputOptions: {
    input: {
      normalize: './css/normalize.css',
      styles: './css/styles.css'
    }
  }
});