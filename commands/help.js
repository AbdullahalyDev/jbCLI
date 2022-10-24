const json = require("jsonbyte");
const fs = require("fs");
const path = require("path");
const colors = require("colors");


module.exports = {
    name: "help",
    aliases: [],
    args: [],
    description: "exit from file",
    run: async (args) => {
        const m = fs.readdirSync(path.join(__dirname, "./"));
        m.forEach((mod) => {
            const mud = require(`./${mod}`)
            console.log(`${mud.name} - ${mud.description}`.green);
        })
    }
}