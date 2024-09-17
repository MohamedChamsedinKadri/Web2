import express from 'express';
import bookRouter from './routes/book';

const app = express();

app.use(express.json());
app.use('/books', bookRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
