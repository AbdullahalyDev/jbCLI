const fs = require("fs");
const commander = require("./commander");

fs.writeFileSync("./settings.json", JSON.stringify({
    "file": null,
    "joins": []
}, null, 4));

commander();