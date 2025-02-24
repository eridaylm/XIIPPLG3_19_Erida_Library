const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const categoriesRoutes = require('./controllers/categories');
const bookRouter = require('./controllers/book');
const loansRoutes = require('./routes/loans');
const sequelize = require('./config/db');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);
app.use('/kategori', categoriesRoutes);
app.use('/books', bookRouter);
app.use('/loans', loansRoutes);


// Sync Database
sequelize.sync()
    // .then(() => console.log('Database & tables created!'))
    .catch(err => console.error('Database sync error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
