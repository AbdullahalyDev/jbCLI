const json = require("jsonbyte");
const fs = require("fs");
const path = require("path");
const colors = require("colors");


module.exports = {
    name: "clear",
    aliases: [],
    args: [],
    description: "clear the console",
    run: async (args) => {
        console.clear();
    }
}