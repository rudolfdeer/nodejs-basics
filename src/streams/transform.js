import { Transform, pipeline } from 'stream';

class Transformer extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    const inputString = chunk.toString();
    const outputString = inputString.split('').reverse().join('');
    this.push(outputString);

    callback();
  }
}

const transformer = () => new Transformer();

export const transform = async () => {
  const inputStream = process.stdin;
  const transformStream = transformer();
  const outputStream = process.stdout;

  pipeline(inputStream, transformStream, outputStream, (err) => {
    if (err) {
      process.stderr.write(`pipeline error: ${err}\n`);
      process.exit(1);
    }
  });
};
