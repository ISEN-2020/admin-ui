import React, { useState } from 'react';
import bookService from '../services/bookService';

const BorrowBook = ({ bookId, title }) => {
  const [message, setMessage] = useState('');

  const handleBorrow = async () => {
    try {
      const response = await bookService.borrowBook(bookId);
      setMessage(`Successfully borrowed: ${title}`);
    } catch (error) {
      setMessage('Error while borrowing the book');
    }
  };

  return (
    <div>
      <button onClick={handleBorrow}>Borrow {title}</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BorrowBook;