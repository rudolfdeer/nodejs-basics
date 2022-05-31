import fs from 'fs';
import path from 'path';

export const read = async () => {
    const PATH = path.join(path.resolve(), './files/fileToRead.txt');
    const readStream = fs.createReadStream(PATH);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })
}
