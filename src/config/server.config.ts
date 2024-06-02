import express from 'express';
import * as bodyParser from 'body-parser';
import AppRoutes from './server.routes';

const app = express();
app.use(bodyParser.json())
app.use(AppRoutes);

export default app;
