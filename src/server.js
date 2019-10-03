import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import cors from 'cors';
import routes from './routes';

dotEnv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// root routes
app.use('/api/v1', routes);

// handle invalid urls
app.use((req, res) => {
  res.status(404).json({
    error: 'Page does not exit',
  });
});

app.listen(PORT)

export default app;
