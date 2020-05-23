import * as ts from "typescript";

export function parseReturnStatement(statement: ts.ReturnStatement) {
    console.log("parseReturnStatement", statement);

    const expression = statement.expression;

    if (!expression) {
        console.log("parseReturnStatement no expression found");
        return;
    }

    const text = (expression as ts.Expression & { text: any }).text;

    switch (expression.kind) {
        case ts.SyntaxKind.NumericLiteral:
            {
                const parsed = parseInt(text);
                console.log("Return", parsed);
            }
            break;
        case ts.SyntaxKind.StringLiteral:
            console.log("Return", text);
            break;
        default:
            throw new Error("parseReturnStatement kind not supported: " + expression.kind);
    }
}
