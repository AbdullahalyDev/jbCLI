const json = require("jsonbyte");
const path = require("path");
const colors = require("colors");
const fs = require("fs");


module.exports = {
    name: "join",
    aliases: [
        "j"
    ],
    args: [
        { name: "key", required: true }
    ],
    description: "join to side object",
    run: async (args) => {
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("you must enter file by using 'enter <filepath>' command".yellow);
        
        const key = args.key;

        const file = new json(config.file);
        
        config.joins.forEach(file.join);

        file.join(key)

        config.joins.push(key);

        fs.writeFileSync(path.join(__dirname, "../settings.json"), JSON.stringify(config, null, 4))

        console.log(`'${key}' Joined Successfully`.green)
    }
}