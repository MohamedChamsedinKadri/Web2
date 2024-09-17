import express from 'express';
import productRouter from './routes/product';

const app = express();

app.use(express.json());
app.use('/products', productRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
