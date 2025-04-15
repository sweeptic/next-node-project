import { getMovie, getMovies } from 'controllers/movies';
import { Router } from 'express';

const moviesRoutes = Router();

moviesRoutes.get('/movies', getMovies);

moviesRoutes.get('/movies/:movieId', getMovie);

export default moviesRoutes;
