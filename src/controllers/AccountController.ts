import { Request, Response } from "express";
import transporter from "../services/smtp.config";
import { HTMLCompiler } from "../utils/HtmlCompiler";

export default class AccountController {
    async login(req: Request, res: Response) {
        const { name, email, password } = req.body;

        if (!name || !email || !password) return res.status(400).json({ message: "Invalid credentials" })

        try {
            const html = await HTMLCompiler.compiler('./src/templates/greetings.html',
                { userName: name, date: new Date() });
            await transporter.sendMail({
                from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
                to: `${name} <${email}>`,
                subject: "Você logou?",
                html
            })

            res.json({ message: "Logged in" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Internal server error' })
        }

    }
}