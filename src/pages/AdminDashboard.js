// components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import bookService from '../services/bookService';
import students from '../mock/students.json'; // Simulez des données utilisateurs
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [editBook, setEditBook] = useState(null);
  
  const [users, setUsers] = useState([]);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await bookService.getBooks();
      setBooks(response);
      setFilteredBooks(response);
    };
    fetchBooks();
    
    setUsers(students);
    setFilteredUsers(students); 
  }, []);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const results = books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
    setFilteredBooks(results);
  };

  const handleUserSearch = () => {
    const query = userSearchQuery.toLowerCase();
    const results = users.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(results);
  };

  const handleAddBook = async () => {
    if (newBookTitle && newBookAuthor) {
      const newBook = {
        id: (books.length + 1).toString(),
        title: newBookTitle,
        author: newBookAuthor
      };
      await bookService.addBook(newBook);
      setBooks([...books, newBook]);
      setFilteredBooks([...filteredBooks, newBook]);
      setNewBookTitle('');
      setNewBookAuthor('');
    }
  };

  const handleEditBook = (book) => {
    setEditBook(book);
    setNewBookTitle(book.title);
    setNewBookAuthor(book.author);
  };

  const handleUpdateBook = async () => {
    if (editBook) {
      const updatedBook = { ...editBook, title: newBookTitle, author: newBookAuthor };
      await bookService.updateBook(updatedBook);
      const updatedBooks = books.map(book =>
        book.id === editBook.id ? updatedBook : book
      );
      setBooks(updatedBooks);
      setFilteredBooks(updatedBooks);
      setEditBook(null);
      setNewBookTitle('');
      setNewBookAuthor('');
    }
  };

  const handleDeleteBook = async (bookId) => {
    await bookService.deleteBook(bookId);
    const updatedBooks = books.filter(book => book.id !== bookId);
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-section search-books">
        <div className="sticky-header">
          <h3>Rechercher des Livres</h3>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher par titre, auteur, etc."
          />
          <button onClick={handleSearch}>Rechercher</button>
        </div>
        <ul>
          {filteredBooks.map(book => (
            <li key={book.id} className="book-item">
              {book.title} - {book.author}
              <div className="book-actions">
                <button onClick={() => handleEditBook(book)}>Modifier</button>
                <button onClick={() => handleDeleteBook(book.id)}>Supprimer</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section manage-books">
        <h3>{editBook ? 'Modifier un Livre' : 'Ajouter un Livre'}</h3>
        <div className="titleBook">
          <input
            type="text"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
            placeholder="Titre du Livre"
          />
          <input
            type="text"
            value={newBookAuthor}
            onChange={(e) => setNewBookAuthor(e.target.value)}
            placeholder="Auteur du Livre"
          />
          {editBook ? (
            <>
              <button onClick={handleUpdateBook}>Mettre à Jour</button>
              <button onClick={() => setEditBook(null)}>Annuler</button>
            </>
          ) : (
            <button onClick={handleAddBook}>Ajouter un Livre</button>
          )}
        </div>
      </div>

      <div className="dashboard-section search-users">
        <div className="sticky-header">
          <h3>Rechercher des Utilisateurs</h3>
          <input
            type="text"
            value={userSearchQuery}
            onChange={(e) => setUserSearchQuery(e.target.value)}
            placeholder="Rechercher par nom, email, etc."
          />
          <button onClick={handleUserSearch}>Rechercher</button>
        </div>
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id} className="user-item">
              {user.name} - {user.email}
              <div className="user-actions">
                <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
