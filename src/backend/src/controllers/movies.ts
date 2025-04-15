import { NextFunction, Request, Response } from 'express';
import Movies from 'models/movies';

export function getMovies(_req: Request, res: Response, next: NextFunction) {
  Movies.find()
    .limit(10)
    .then((movies) => {
      res.status(200).json({
        message: 'fetched movies successfully',
        movies: movies || [],
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
}

export function getMovie(req: Request, res: Response, next: NextFunction): void {
  const movieId = req.params.movieId;

  Movies.findById(movieId)
    .then((movieDetails) => {
      return res.status(200).json({ movieDetails: movieDetails });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
}
