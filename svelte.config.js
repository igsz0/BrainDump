// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    prerender: {
      entries: ['*'] // importante para que exporte todas las rutas encontradas
    }
  }
};
