import zlib from 'zlib';
import path from 'path';
import fs from 'fs';

export const compress = async () => {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream(path.join(path.resolve(), './files/fileToCompress.txt'));
    const output = fs.createWriteStream(path.join(path.resolve(), './files/archive.gz'));

    input.pipe(gzip).pipe(output);

};
