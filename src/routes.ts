import Router, { Request, Response } from 'express';
import MessageController from './controllers/MessageController';

export const routes = Router();

routes.get('/', (req: Request, res: Response) => res.send("App is alive"))
routes.post('/send-message', new MessageController().send);

export default routes