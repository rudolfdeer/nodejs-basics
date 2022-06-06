import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const FILE = './hash/files/fileToCalculateHashFor.txt';

export const calculateHash = async () => {
  const string = fs.readFileSync(
    path.join(path.resolve(), FILE),
    { encoding: 'utf-8' },
    (err, data) => {
      if (err) throw err;
      return data;
    }
  );

  const result = crypto.createHash('sha256').update(string).digest('hex');
  process.stdout.write(result);
};
