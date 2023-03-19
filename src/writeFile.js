// import necessary dependencies
const fs = require('fs');

const writeFile = htmlFile => 
fs.writeFile('./dist/index.html', htmlFile, (err) => {
    err ? console.log(err) : console.log("Your team's profile has been assembled!")
});

module.exports = writeFile;