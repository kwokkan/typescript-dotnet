import * as ts from "typescript";
import { parseReturnStatement } from "./parsers/returnStatement";
import { FileFormat } from "./types/FileFormat";

export class Compiler {
    createFromText(text: string): void {
        console.log("createFromText", text);

        const sourceFile: ts.SourceFile = ts.createSourceFile("", text, ts.ScriptTarget.Latest);

        if (!sourceFile) {
            console.error("No text specified");
            return;
        }

        const fileFormat = new FileFormat();
        const outputArray = fileFormat.getArray();

        for (var i = 0; i < sourceFile.statements.length; i++) {
            const currentStatement = sourceFile.statements[i];

            console.log("Current statement", currentStatement);

            switch (currentStatement.kind) {
                case ts.SyntaxKind.ReturnStatement:
                    parseReturnStatement(currentStatement as ts.ReturnStatement);
                    break;
                default:
                    throw new Error("createFromText kind not supported: " + currentStatement.kind);
            }
        }

        console.log("Compiled", outputArray.buffer);
    }

    compile(): void {
        console.log("compile");
    }
}
