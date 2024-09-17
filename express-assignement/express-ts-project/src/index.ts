import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import usersRoutes from './routes/users';
import productsRoutes from './routes/products';

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Serve the home page
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Use users and products routers
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

// Handle 404 errors
app.use((req: Request, res: Response) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
