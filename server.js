const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const blogRoutes = require('./routes/blog');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

const connectDB = require('./util/dbConnection.js');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use('/images/', express.static('images'));
app.use(contactRoutes);
app.use(blogRoutes);
app.use(productRoutes);
app.use(userRoutes);

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})