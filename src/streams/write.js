import fs from 'fs';
import path from 'path';

export const write = async () => {
    const stream = fs.createWriteStream(path.join(path.resolve(), './files/fileToWrite.txt'), {flags: 'a'});

    process.stdin.on('data', (data) => {
        stream.write(data);
    })
};
