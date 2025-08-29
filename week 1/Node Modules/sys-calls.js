
const fs = require('fs');
const os = require('os');

fs.writeFile('sample.txt', 'Hello! This is a sample file created using the fs module.', (err) => {
    if (err) {
        console.error('Error writing sample.txt:', err);
        return;
    }
    console.log('sample.txt has been created and data written successfully.');

   
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading sample.txt:', err);
            return;
        }
        console.log('Contents of sample.txt:');
        console.log(data);

        // 3. Write the content into a new file called output.txt
        fs.writeFile('output.txt', `Copied content:\n${data}`, (err) => {
            if (err) {
                console.error('Error writing output.txt:', err);
                return;
            }
            console.log('Data has been successfully written to output.txt.');
        });
    });
});


console.log('\n===== Operating System Information =====');
console.log('Hostname:', os.hostname());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Info:', os.cpus());
console.log('Free Memory (bytes):', os.freemem());
console.log('Total Memory (bytes):', os.totalmem());
console.log('OS Type:', os.type());
console.log('System Uptime (seconds):', os.uptime());
