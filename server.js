const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const addedBooksFilePath = path.join(__dirname, 'data', 'addedBooks.json');
const updatedBooksFilePath = path.join(__dirname, 'data', 'updatedBooks.json');
const deletedBooksFilePath = path.join(__dirname, 'data', 'deletedBooks.json');

// Fonction pour lire un fichier JSON
const readJsonFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
};

// Fonction pour écrire dans un fichier JSON
const writeJsonFile = (filePath, data) => {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(`Error writing file ${filePath}:`, err);
    }
  });
};

// Endpoint pour récupérer la liste des livres
app.get('/api/books', (req, res) => {

  const books = readJsonFile(addedBooksFilePath); 
  res.json(books);
});

// Endpoint pour ajouter un livre
app.post('/api/books', (req, res) => {
  const newBook = req.body;
  const books = readJsonFile(addedBooksFilePath);
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(newBook);
  writeJsonFile(addedBooksFilePath, books);
  res.json(newBook);
});

// Endpoint pour modifier un livre
app.put('/api/books/:id', (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  let books = readJsonFile(addedBooksFilePath);
  books = books.map(book =>
    book.id === parseInt(id) ? updatedBook : book
  );
  writeJsonFile(addedBooksFilePath, books); 
  writeJsonFile(updatedBooksFilePath, books); 
  res.json(updatedBook);
});

// Endpoint pour supprimer un livre
app.delete('/api/books/:id', (req, res) => {
  const { id } = req.params;
  let books = readJsonFile(addedBooksFilePath);
  books = books.filter(book => book.id !== parseInt(id));
  writeJsonFile(addedBooksFilePath, books); 
  writeJsonFile(deletedBooksFilePath, books); 
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
