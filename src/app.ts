import express from 'express';
import routes from './routes';

export const app = express();
app.use(routes)

app.use(express.json());