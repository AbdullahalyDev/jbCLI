const json = require("jsonbyte");
const path = require("path");
const colors = require("colors");
const fs = require("fs");


module.exports = {
    name: "conditional",
    aliases: [
        "cond"
    ],
    args: [
        { name: "type", required: true },
        { name: "conditionalType", required: true }
    ],
    description: "change value of property",
    run: async (fArgs, args) => {
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("you must enter file by using 'enter <filepath>' command".yellow);
        
        const type = fArgs.type;
        const conditionalType = fArgs.conditionalType;

        var cond = args.slice(2).toString();
        


        const file = new json(config.file);

        config.joins.forEach(file.join);

    
        if (type == "key") {
            if (conditionalType == "startsWith") {
                const c = file.conditional.key.startsWith(cond);
                console.log(c)
            }
            else if (conditionalType == "includes") {
                const c = file.conditional.key.includes(cond);
                console.log(c)
            }
            else if (conditionalType == "endsWith") {
                const c = file.conditional.key.endsWith(cond);
                console.log(c)
            }
            else return console.log("please write type of conditional".red);
        }
        else if (type == "value") {
            if (conditionalType == "startsWith") {
                const c = file.conditional.value.startsWith(cond);
                console.log(c)
            }
            else if (conditionalType == "includes") {
                const c = file.conditional.value.includes(cond);
                console.log(c)
            }
            else if (conditionalType == "endsWith") {
                const c = file.conditional.value.endsWith(cond);
                console.log(c)
            }
            else return console.log("please write type of conditional".red);
        }
        else return console.log("please write the type of conditional")

        file.leave().save()
    }
}