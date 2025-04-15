import { Router } from 'express';
import { getMovie, getMovies } from '../controllers/movies';

const moviesRoutes = Router();
//
moviesRoutes.get('/movies', getMovies);

moviesRoutes.get('/movies/:movieId', getMovie);

export default moviesRoutes;
