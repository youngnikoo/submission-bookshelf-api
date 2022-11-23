const {
  addBookHanlder, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHanlder,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByHandler,
  },
];

module.exports = routes;
