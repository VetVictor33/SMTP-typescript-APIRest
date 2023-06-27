import Router, { Request, Response } from 'express';
import AccountController from './controllers/AccountController';

export const routes = Router();

routes.get('/', (req: Request, res: Response) => res.send("App is alive"))
routes.post('/login', new AccountController().login);

export default routes