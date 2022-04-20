import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import './database';

import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());

app.use(routes);

export default app;
