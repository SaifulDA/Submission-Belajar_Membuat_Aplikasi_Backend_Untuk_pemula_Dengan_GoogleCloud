const Hapi = require('@hapi/hapi'); // Mengimport modul hapi dari node_modules
const routes = require('./routes'); // Mengimport modul routes dari file routes.js

// Membuat server dengan konfigurasi port dan host
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init(); // Menginisialisasi server
