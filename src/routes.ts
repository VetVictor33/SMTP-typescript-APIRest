import Router, { Request, Response } from 'express';

export const routes = Router();

routes.get('/', (req: Request, res: Response) => res.send("App is alive"))

export default routes