import express from 'express';
import cors from 'cors';

//@ts-ignore
import { returnApiVersion, getData1 } from './apiController';

const app = express();
const port = 3000;

app.use(cors())

//Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//REST API version
app.get('/v', (req, res) => {
  res.send(returnApiVersion());
});

//Data1 for our application
app.get('/data1', (req, res) => {
  res.send(getData1());
});