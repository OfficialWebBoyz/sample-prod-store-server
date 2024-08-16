
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// For env File 
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
  // todo, figure out how to get local https
  // or dynamically create subdomains using tunnels
  origin: ['http://localhost:5173'],
}))

app.get('/api', (req: Request, res: Response) => {
  res.send({myles: '🗿'});
});

app.listen(port, () => {
  console.log(`Server is 🔥 at http://localhost:${port}`);
});

