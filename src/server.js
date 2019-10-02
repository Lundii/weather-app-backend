import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';

dotEnv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))