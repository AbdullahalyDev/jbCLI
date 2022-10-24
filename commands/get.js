const json = require("jsonbyte");
const path = require("path");
const fs = require("fs");
const colors = require("colors");


module.exports = {
    name: "get",
    aliases: [
        "g"
    ],
    args: [
        { name: "type", required: true },
        { name: "key", required: true }
    ],
    description: "get value of property",
    run: async (fArgs, args) => {
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("you must enter file by using 'enter <filepath>' command".yellow);
        
        const key = fArgs.key;

        const file = new json(config.file);
        config.joins.forEach(file.join)

        if (fArgs.type == "property" | fArgs.type == "prop") {
            const val = file.get(key);
            console.log(val)
        }
        if (fArgs.type == "comment" | fArgs.type == "comm") {
            var val;
            if (key == "-all") val = file.comments.all();
            else val = file.comments.get(key);
            console.log(val)
        }
        if (fArgs.type == "element" | fArgs.type == "elm") {
            const val = file.getElm(val)
            console.log(val)
        }
    }
}