const { exec } = require("child_process");
const path = require("path");

function generate(prompt, type) {
    return new Promise((resolve, reject) => {
        const outputFile = type === "image" ? "output.png" : "output.mp4";
        const command = `python3 python/generate.py "${prompt}" ${type} ${outputFile}`;
        
        exec(command, (error) => {
            if(error) return reject(error);
            resolve(path.join("/generated", outputFile));
        });
    });
}

module.exports = { generate };
