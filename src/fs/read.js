import fs from 'fs';
import path from 'path';

const FILE = './files/fileToRead.txt';
const ERR_MESSAGE = 'FS operation failed';

export const read = async () => {
  if (!fs.existsSync(path.join(path.resolve(), FILE))) {
    throw new Error(ERR_MESSAGE);
  }

  fs.readFile(path.join(path.resolve(), FILE), { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
