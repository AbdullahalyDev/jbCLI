const json = require("jsonbyte");
const path = require("path");
const colors = require("colors");
const fs = require("fs");


module.exports = {
    name: "exists",
    aliases: [
        "exist",
        "exi"
    ],
    args: [
        { name: "key", required: true }
    ],
    description: "check if property is exists",
    run: async (args) => {
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("you must enter file by using 'enter <filepath>' command".yellow);
        
        const key = args.key;

        const file = new json(config.file);
        config.joins.forEach(file.join)

        const exists = file.exists(key)
        if (exists) return console.log(`True`.green);
        else return console.log(`False`.red);
    }
}