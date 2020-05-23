const ts = require("typescript");
function parseReturnStatement(statement) {
    console.log("parseReturnStatement", statement);
    const expression = statement.expression;
    const text = expression.text;
    switch (expression?.kind) {
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
            throw new Error("parseReturnStatement kind not supported: " + expression?.kind);
    }
}
module.exports = parseReturnStatement;
