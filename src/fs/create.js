import fs from 'fs';
import path from 'path';

const INPUT = './files/fresh.txt';
const TEXT = 'I am fresh and young';
const ERR_MESSAGE = 'FS operation failed';
const SUCCESS_MESSAGE = 'File is created successfully';

export const create = async () => {
  if (fs.existsSync(path.join(path.resolve(), INPUT))) {
    throw new Error(ERR_MESSAGE);
  }
  fs.writeFile(path.join(path.resolve(), INPUT), TEXT, (err) => {
    if (err) throw err;
    console.log(SUCCESS_MESSAGE);
  });
};
