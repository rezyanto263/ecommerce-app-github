require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use(express.json()); // Middleware untuk parsing JSON body

// Rute untuk setiap modul
app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/transactions', transactionRoutes);
// Rute dasar
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API!');
});
//HElo
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access API at http://localhost:${PORT}/api`);
});
