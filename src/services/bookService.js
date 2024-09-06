const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', year: 2020 },
  { id: 2, title: 'Book 2', author: 'Author 2', year: 2019 },
];

const borrowedBooks = [
  { id: 1, title: 'Book 1', dueDate: '2022-12-01' },
];

const bookService = {
  getBooks: async () => {
    // Simulated API call for fetching books
    return Promise.resolve(books);
  },
  borrowBook: async (bookId) => {
    // Simulated API call for borrowing a book
    return Promise.resolve({ message: `Book ${bookId} borrowed successfully` });
  },
  getBorrowedBooks: async () => {
    // Simulated API call for fetching borrowed books
    return Promise.resolve(borrowedBooks);
  },
};

export default bookService;