const fs = require("fs");
const path = require("path")

module.exports = async (command) => {
    return new Promise((resolve, reject) => {
        const allModules = fs.readdirSync(path.join(__dirname, "../commands"))
        allModules.forEach(async (mod) => {
            const module = require(`../commands/${mod}`);
            if (module.name == command | module.aliases.includes(command)) return resolve(module);
        })

        return resolve(false);
    });
}