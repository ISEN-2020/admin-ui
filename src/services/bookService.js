const apiUrl = 'http://localhost:5000/api';

const bookService = {
  getBooks: async () => {
    const response = await fetch(`${apiUrl}/books`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
  addBook: async (newBook) => {
    const response = await fetch(`${apiUrl}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    return response.json();
  },
  updateBook: async (updatedBook) => {
    const response = await fetch(`${apiUrl}/books/${updatedBook.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    });
    return response.json();
  },
  deleteBook: async (id) => {
    await fetch(`${apiUrl}/books/${id}`, {
      method: 'DELETE',
    });
  },
};

export default bookService;
