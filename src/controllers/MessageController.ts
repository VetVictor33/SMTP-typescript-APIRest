import { Request, Response } from "express";
import transporter from "../services/smtp.config";
import { HTMLCompiler } from "../utils/HtmlCompiler";

export default class MessageController {
    async send(req: Request, res: Response) {
        const { name, email, message } = req.body;

        if (!name || !email || !message) return res.status(400).json({ message: "Invalid data" })

        try {
            const html = await HTMLCompiler.compiler('./src/templates/greetings.html',
                { name, email, message, date: new Date() });
            await transporter.sendMail({
                from: `${name} <${process.env.EMAIL_FROM}>`,
                to: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
                subject: `Mensagem enviada do portfólio por ${name}`,
                html
            })

            res.json({ message: "Message send" })
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }

    }
}