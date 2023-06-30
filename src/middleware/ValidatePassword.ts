import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';

export default class ValidadePassword {
    async check(req: Request, res: Response, next: NextFunction) {
        try {
            const { password } = req.body;
            if (!password) {
                throw new Error;
            }
            const isPasswordCorrect = await bcrypt.compare(password, process.env.SMTP_KEY_HASH!);
            if (!isPasswordCorrect) {
                throw new Error;
            };

            next()

        } catch (error) {
            res.status(401).json("Not allowed")
        }
    }
}