const json = require("jsonbyte");
const path = require("path");
const colors = require("colors");
const fs = require("fs");


module.exports = {
    name: "change",
    aliases: [
        "cng",
        "chng",
        "chan"
    ],
    args: [
        { name: "type", required: true },
        { name: "key", required: true },
        { name: "dataType", required: true },
        { name: "value", required: true }
    ],
    description: "change value of property",
    run: async (fArgs, args) => {
        const config = JSON.parse(fs.readFileSync(path.join(__dirname, "../settings.json")));

        if (!config.file) return console.log("you must enter file by using 'enter <filepath>' command".yellow);
        
        const key = fArgs.key;
        const dataType = fArgs.dataType;
        const type = fArgs.type;

        var val = args.slice(3).toString();

        if (dataType == "string" | dataType == "str") {
            if (!val.length) return console.log("value argument not found");
            val = val.replace(/,/g, " ")
        }

        else if (dataType == "number" | dataType == "num") {
            if (!val.length) return console.log("value argument not found");
            val = Number(val)
        }

        else if (dataType == "boolean" | dataType == "bool") {
            if (!val.length) return console.log("value argument not found");
            if (val == "true") val = true;
            else if (val == "false") val = false;
            else return console.log("boolean data type must be 'true' or 'false'".red);
        }

        else if (dataType == "array" | dataType == "arr") val = []

        else if (dataType == "object" | dataType == "obj") val = {}

        else return console.log("you must write the data type of value".red);



        const file = new json(config.file);

        config.joins.forEach(file.join)
    
        if (type == "property" | type == "prop") {
            file.change(key, val);
            console.log(`'${key}' Changed Successfully`.green)
        }
        else if (type == "comment" | type == "comm") {
            file.change(`//${key}//`, val);
            console.log(`"${key}" Removed Successfully`.green)
        }
        else if (type == "element" | type == "elm") {
            file.removeElm(Number(k));
            console.log(`Removed Successfully`.green)
        }
        else return console.log("you must choose the type of property to change".red);

        file.leave().save()
    }
}