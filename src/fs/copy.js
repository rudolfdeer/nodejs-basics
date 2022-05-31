import fs from 'fs';
import path from 'path';

const INPUT = './files';
const OUTPUT = './files_copy';
const ERR_MESSAGE = 'FS operation failed';
const SUCCESS_MESSAGE = 'Files are copied successfully';

export const copy = async () => {
  if (!fs.existsSync(path.join(path.resolve(), INPUT))) {
    throw new Error(ERR_MESSAGE);
  }
  if (fs.existsSync(path.join(path.resolve(), OUTPUT))) {
    throw new Error(ERR_MESSAGE);
  }
  fs.cp(path.join(path.resolve(), INPUT), path.join(path.resolve(), OUTPUT), { recursive: true }, (err) => {
    if (err) throw err;
    console.log(SUCCESS_MESSAGE);
  });
};
