import 'dotenv/config'
import express from 'express';
import routes from './routes';
import cors from 'cors';
import ValidadePassword from './middleware/ValidatePassword';

export const app = express();
app.use(cors());
app.use(express.json());
app.use(new ValidadePassword().check)
app.use(routes)
