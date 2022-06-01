import zlib from 'zlib';
import path from 'path';
import fs from 'fs';

export const decompress = async () => {
    const input = fs.createReadStream(path.join(path.resolve(), './files/archive.gz'));
    const output = fs.createWriteStream(path.join(path.resolve(), './files/fileToCompress.txt'));
    const unzip = zlib.createGunzip();

    input.pipe(unzip).pipe(output);
};
