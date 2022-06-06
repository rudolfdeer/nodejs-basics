import fs from 'fs';
import path from 'path';

const FILE = './files/fileToRemove.txt';
const ERR_MESSAGE = 'FS operation failed';
const SUCCESS_MESSAGE = 'File is deleted successfully';

export const remove = async () => {
  if (!fs.existsSync(path.join(path.resolve(), FILE))) {
    throw new Error(ERR_MESSAGE);
  }

  fs.unlink(path.join(path.resolve(), FILE), (err) => {
    if (err) throw err;
    console.log(SUCCESS_MESSAGE);
  });
};
