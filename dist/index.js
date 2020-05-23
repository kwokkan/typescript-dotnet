const compiler = require("./compiler");
function main(...args) {
    console.log("Running with args", ...args);
    for (var i = 0; i < args.length; i++) {
        console.log("Parsing", args[i]);
        const c = new compiler();
        c.createFromText(args[i]);
    }
    return 0;
}
const args = process.argv.slice(2);
main(...args);
