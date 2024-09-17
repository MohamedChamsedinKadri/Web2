import express, { Request, Response } from 'express';
import notFound from './middleware/notFound';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('*', notFound);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});