import { SourceFile } from "typescript";

const ts = require("typescript");
const parseReturnStatement = require("./parsers/returnStatement");

class Compiler {
    createFromText(text: string): void {
        console.log("createFromText", text);

        const sourceFile: SourceFile = ts.createSourceFile("", text, ts.ScriptTarget.Latest);

        if (!sourceFile) {
            console.error("No text specified");
            return;
        }

        for (var i = 0; i < sourceFile.statements.length; i++) {
            const currentStatement = sourceFile.statements[i];

            console.log("Current statement", currentStatement);

            switch (currentStatement.kind) {
                case ts.SyntaxKind.ReturnStatement:
                    parseReturnStatement(currentStatement);
                    break;
                default:
                    throw new Error("createFromText kind not supported: " + currentStatement.kind);
            }
        }

        console.log("Compiled");
    }

    compile(): void {
        console.log("compile")
    }
}

module.exports = Compiler;
