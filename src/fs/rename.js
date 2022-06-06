import fs from 'fs';
import path from 'path';

const INPUT = './files/wrongFilename.txt';
const OUTPUT = './files/properFilename.md';
const ERR_MESSAGE = 'FS operation failed';
const SUCCESS_MESSAGE = 'File is renamed successfully';

export const rename = async () => {
  if (!fs.existsSync(path.join(path.resolve(), INPUT))) {
    throw new Error(ERR_MESSAGE);
  }
  if (fs.existsSync(path.join(path.resolve(), OUTPUT))) {
    throw new Error(ERR_MESSAGE);
  }

  fs.rename(path.join(path.resolve(), INPUT), path.join(path.resolve(), OUTPUT), (err) => {
    if (err) throw err;
    console.log(SUCCESS_MESSAGE);
  });
};
