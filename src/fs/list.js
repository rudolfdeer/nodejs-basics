import fs from 'fs';
import path from 'path';

const PATH = './files';
const ERR_MESSAGE = 'FS operation failed';

export const list = async () => {
  if (!fs.existsSync(path.join(path.resolve(), PATH))) {
    throw new Error(ERR_MESSAGE);
  }

  fs.readdir(path.join(path.resolve(), PATH), (err, files) => {
    if (err) throw err;

    console.log(files);
  });
};
