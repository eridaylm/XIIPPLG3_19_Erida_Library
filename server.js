const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const categoriesRoutes = require('./controllers/categories');
const bookRoutes = require('./routes/bookroutes')
const sequelize = require('./config/db');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);
app.use('/kategori', categoriesRoutes);
app.use('/book', bookRoutes);

// app.use('/book', bookRoutes);

// Sync Database
sequelize.sync()
    // .then(() => console.log('Database & tables created!'))
    .catch(err => console.error('Database sync error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
