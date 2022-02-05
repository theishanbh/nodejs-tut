const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    try {
        console.log(data.toString())
    } catch (error) {
        console.log(error);
    }
})
// writing files

fs.writeFile('./docs/blog1.txt','hello, world', () => {
    console.log('file was written');
})

// directories

// deleting files