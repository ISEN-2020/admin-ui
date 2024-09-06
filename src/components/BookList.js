import React, { useEffect, useState } from 'react';
import bookService from '../services/bookService';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await bookService.getBooks();
      setBooks(response);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (Published: {book.year})
            <button onClick={() => bookService.borrowBook(book.id)}>Borrow</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;