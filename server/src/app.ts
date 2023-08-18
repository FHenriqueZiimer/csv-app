import express from 'express';
import cors from 'cors';
import csvRoutes from './routes/csvRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use('/api', csvRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use((_req, res) => {
  return res.status(404).json({ error: 'Not Found' });
});

export default app