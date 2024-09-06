const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', year: 2020 },
  { id: 2, title: 'Book 2', author: 'Author 2', year: 2019 },
];

const bookService = {
  getBooks: async () => {
    return Promise.resolve(books);
  },
  addBook: async (newBook) => {
    books.push(newBook);
    return Promise.resolve(newBook);
  },
  updateBook: async (updatedBook) => {
    const index = books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      books[index] = updatedBook;
      return Promise.resolve(updatedBook);
    }
    return Promise.reject(new Error('Book not found'));
  },
  deleteBook: async (bookId) => {
    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
      books.splice(index, 1);
      return Promise.resolve({ message: `Book ${bookId} deleted successfully` });
    }
    return Promise.reject(new Error('Book not found'));
  },
};

export default bookService;
