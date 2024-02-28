const exp = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conn = require('./config/db');
const path = require('path');

dotenv.config();

conn();

const app = exp();

// frontend
app.use(exp.static(path.join(__dirname, 'build')));

app.use(cors());
app.use(exp.json());

const noteRoutes = require('./routes/note');
app.use('/api/notes', noteRoutes);

// frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));