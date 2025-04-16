import { getAvailableNewsYears, getMovie, getMovies } from 'controllers/movies';
import { Router } from 'express';

const moviesRoutes = Router();

moviesRoutes.get('/movies', getMovies);

moviesRoutes.get('/get-available-movies-years', getAvailableNewsYears);

moviesRoutes.get('/movies/:movieId', getMovie);

export default moviesRoutes;
