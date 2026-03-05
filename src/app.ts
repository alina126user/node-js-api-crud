import express from 'express';
import usersRouter from './routes/usersRoutes';
import trackRouter from './routes/tracksRoutes';
import albumRouter from './routes/albumsRoutes';
import artistsRoute from "./routes/artistsRoutes";

const app = express();

app.use(express.json());

app.use('/users', usersRouter)
app.use('/tracks', trackRouter)
app.use('/albums', albumRouter)
app.use('/artist', artistsRoute)
export default app;
