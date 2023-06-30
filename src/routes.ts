import Router, { Request, Response } from 'express';
import MessageController from './controllers/MessageController';
import ValidadePassword from './middleware/ValidatePassword';

export const routes = Router();

routes.get('/', (req: Request, res: Response) => res.send("App is alive"));

routes.use(new ValidadePassword().check);
routes.post('/send-message', new MessageController().send);

export default routes