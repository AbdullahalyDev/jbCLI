const json = require("jsonbyte");
const path = require("path");
const colors = require("colors");
const fs = require("fs");


module.exports = {
    name: "create",
    aliases: [
        "crt",
        "cr"
    ],
    args: [
        { name: "type", required: true },
        { name: "key", required: true },
        { name: "dataType", required: true }
    ],
    description: "create property in the file",
    run: async (fArgs, args) => {
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("you must enter file by using 'enter <filepath>' command".yellow);
        
        const key = fArgs.key;
        const type = fArgs.dataType
        var val = args.slice(3).toString();

        if (type == "string" | type == "str") {
            if (!val.length) return console.log("value argument not found");
            val = val.replace(/,/g, " ")
        }

        else if (type == "number" | type == "num") {
            if (!val.length) return console.log("value argument not found");
            val = Number(val)
        }

        else if (type == "boolean" | type == "bool") {
            if (!val.length) return console.log("value argument not found");
            if (val == "true") val = true;
            else if (val == "false") val = false;
            else return console.log("boolean data type must be 'true' or 'false'".red);
        }

        else if (type == "array" | type == "arr") val = []
            
        else if (type == "object" | type == "obj") val = {}
            
        else return console.log("you must write the data type of value".red);




        const file = new json(config.file);
        config.joins.forEach(file.join)

        if (fArgs.type == "property" | fArgs.type == "prop") {
            file.create(key, val)
            console.log(`'${key}' Created Successfully`.green)
        }
        else if (fArgs.type == "comment" | fArgs.type == "comm") {
            file.comments.create(key, val)
            console.log(`'${key}' Created Successfully`.green)
        }
        else if (fArgs.type == "element" | fArgs.type == "elm") {
            file.createElm(val)
            console.log(`Created Successfully`.green)
        }
        else if (fArgs.type == "elementfirst" | fArgs.type == "elmf") {
            file.createElmInFirst(val)
            console.log(`Created Successfully`.green)
        }
        else return console.log("you must choose the type of property to create".red);

        file.leave().save();

    }
}