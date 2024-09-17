import { Router } from 'express';
import path from 'path';

const router = Router();

// GET request for users
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'users.html'));
});

// POST request to add a new user
router.post('/', (req, res) => {
  const userName = req.body.username;
  console.log(`User added: ${userName}`);
  res.redirect('/users');
});

export default router;
