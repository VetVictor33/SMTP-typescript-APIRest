import { Request, Response } from "express";
import transporter from "../services/smtp.config";
import { HTMLCompiler } from "../utils/HtmlCompiler";
import bcrypt from 'bcrypt';

export default class MessageController {
    async send(req: Request, res: Response) {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) return res.status(400).json({ message: "Invalid data" })

        try {
            const html = await HTMLCompiler.compiler('./src/templates/greetings.html',
                { name, email, message, date: new Date() });
            await transporter.sendMail({
                from: `Do portfólio - ${name} <${process.env.EMAIL_FROM}>`,
                to: `Portfólio <${process.env.EMAIL_TO}>`,
                subject,
                html
            })

            res.json({ message: "Message send" })
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }

    }
}