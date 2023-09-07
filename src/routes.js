const {
  // eslint-disable-next-line max-len
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler'); // Mengimport fungsi handler

// Membuat routes books
const routes = [
  {
    // Membuat route untuk menambahkan buku
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    // Membuat route untuk mendapatkan seluruh buku
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    // Membuat route untuk mendapatkan buku berdasarkan id
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    // Membuat route untuk mengubah buku berdasarkan id
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    // Membuat route untuk menghapus buku berdasarkan id
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes; // Mengexport routes agar dapat digunakan oleh file lain
