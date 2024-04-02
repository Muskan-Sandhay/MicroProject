import express from  'express';
import cors from 'cors';

import data from  './data/book.json'assert { type: 'json' };
const app = express(); 
app.use(cors({
    origin: 'http://127.0.0.1:5500', // Replace with your website's URL
    credentials: true // Enable cookies for cross-origin requests (optional)
}));

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
app.get('/', (req, res) => {
    res.json(data);
});



