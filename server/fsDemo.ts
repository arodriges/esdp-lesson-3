import * as fs from 'fs';

const fileName = 'test.txt';

fs.writeFile(fileName, 'Hello world', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('File was created');
});
