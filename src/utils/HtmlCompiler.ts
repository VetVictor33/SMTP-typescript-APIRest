import fs from 'fs/promises';
import handlebars from 'handlebars';

interface HTMLCompilerContextObject {
    name: string,
    email: string,
    message: string,
    date: Date
}

export abstract class HTMLCompiler {
    static async compiler(filePath: string, context: HTMLCompilerContextObject): Promise<string> {
        const html = (await fs.readFile(filePath)).toString();
        const compiler = handlebars.compile(html);
        const compiledHtml = compiler(context);
        return compiledHtml
    }
}