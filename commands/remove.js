const json = require("jsonbyte");
const path = require("path");
const fs = require("fs");
const colors = require("colors");


module.exports = {
    name: "remove",
    aliases: [
        "rem"
    ],
    args: [
        { name: "type", required: true },
        { name: "key", required: true }
    ],
    description: "remove property from the file",
    run: async (fArgs, args) => {
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("you must enter file by using 'enter <filepath>' command".yellow);
        
        const type = fArgs.type;
        const key = args.slice(1);

        const file = new json(config.file);
        config.joins.forEach(file.join);

        if (type == "property" | type == "prop") {
            file.remove(key);
            console.log(`Removed Successfully`.green)
        }
        else if (type == "comment" | type == "comm") {
            file.comments.remove(key);
            console.log(`Removed Successfully`.green)
        }
        else if (type == "element" | type == "elm") {
            key.forEach((k) => {
                if (isNaN(k)) return console.log("key must be number".red);
                file.removeElm(Number(k));
            })
            console.log(`Removed Successfully`.green)
        }
        else return console.log("you must choose the type of property to remove".red);

        file.leave().save();
    }
}