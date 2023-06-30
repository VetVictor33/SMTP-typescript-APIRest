import 'dotenv/config'
import express from 'express';
import routes from './routes';
import cors from 'cors';

export const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN_URL,
    optionsSuccessStatus: 200
}));
app.use(routes)
