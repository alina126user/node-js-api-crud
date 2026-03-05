import express from 'express';
import usersRouter from './routes/usersRoutes';
import trackRouter from './routes/tracksRoutes';

const app = express();

app.use(express.json());

app.use('/users', usersRouter)
app.use('/tracks', trackRouter)

export default app;
