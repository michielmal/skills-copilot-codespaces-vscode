// create web server
const express = require('express');
const app = express();

// create route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// create route
app.get('/api/comments', (req, res) => {
  res.send('Comments');
});

// create route
app.get('/api/comments/:id', (req, res) => {
  res.send(req.params.id);
});

// create route
app.post('/api/comments', (req, res) => {
  res.send('Comment is created.');
});

// create route
app.put('/api/comments/:id', (req, res) => {
  res.send('Comment is updated.');
});

// create route
app.delete('/api/comments/:id', (req, res) => {
  res.send('Comment is deleted.');
});

// create route
app.get('/api/posts', (req, res) => {
  res.send('Posts');
});

// create route
app.get('/api/posts/:id', (req, res) => {
  res.send(req.params.id);
});

// create route
app.post('/api/posts', (req, res) => {
  res.send('Post is created.');
});

// create route
app.put('/api/posts/:id', (req, res) => {
  res.send('Post is updated.');
});

// create route
app.delete('/api/posts/:id', (req, res) => {
  res.send('Post is deleted.');
});

// create route
app.get('/api/categories', (req, res) => {
  res.send('Categories');
});

// create route
app.get('/api/categories/:id', (req, res) => {
  res.send(req.params.id);
});

// create route
app.post('/api/categories', (req, res) => {
  res.send('Category is created.');
});

// create route
app.put('/api/categories/:id', (req, res) => {
  res.send('Category is updated.');
});

// create route
app.delete('/api/categories/:id', (req, res) => {
  res.send('Category is deleted.');
});

// create route
app.get('/api/tags', (req, res) => {
  res.send('Tags');
});

// create route
app.get('/api/tags/:id', (req, res) => {
  res.send(req.params.id);
});

// create route
app.post('/api/tags', (req, res) => {
  res.send('Tag is created.');
});