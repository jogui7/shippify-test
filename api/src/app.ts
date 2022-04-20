import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import 'reflect-metadata';
import routes from './routes';

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use(routes);

export default app;
