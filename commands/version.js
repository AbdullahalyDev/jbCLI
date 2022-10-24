const json = require("jsonbyte");
const fs = require("fs");
const path = require("path");
const colors = require("colors");


module.exports = {
    name: "version",
    aliases: ["ver"],
    args: [
    ],
    description: "get version of application",
    run: async (args) => {
        console.log(`${require("../version.json").version}`.green);
    }
}