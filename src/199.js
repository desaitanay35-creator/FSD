const express = require('express');
const app = express();
const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'user' }
];
app.get('/users', (req, res) => {
  let result = users;
  const { name, role } = req.query;
  if (name) {
    result = result.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
  }
  if (role) {
    result = result.filter(u => u.role === role);
  }
  res.json(result);
});
app.listen(3000);