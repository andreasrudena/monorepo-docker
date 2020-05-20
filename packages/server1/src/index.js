import express from 'express';
import { module1 } from 'module1';

console.log(module1());

const app = express();

app.get('/', (req, res) => {
  res.send('Ok');
});

app.listen(4444, err => {
  console.log('Server started on 4444');
});