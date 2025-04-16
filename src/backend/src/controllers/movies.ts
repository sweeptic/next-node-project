import { NextFunction, Request, Response } from 'express';
import Movies from 'models/movies';

interface Error {
  statusCode: number;
}

function nextError(err: Error, next: NextFunction) {
  if (!err.statusCode) {
    err.statusCode = 500;
  }

  next(err);
}

export function getMovies(_req: Request, res: Response, next: NextFunction) {
  Movies.find()
    .limit(20)
    .then((movies) => {
      res.status(200).json({
        message: 'fetched movies successfully',
        movies: movies || [],
      });
    })
    .catch((err) => {
      nextError(err, next);
    });
}

export function getMovie(req: Request, res: Response, next: NextFunction): void {
  const movieId = req.params.movieId;

  Movies.findById(movieId)
    .then((movieDetails) => {
      return res.status(200).json({ movieDetails: movieDetails });
    })
    .catch((err) => {
      nextError(err, next);
    });
}

export function getAvailableNewsYears(_req: Request, res: Response, next: NextFunction) {
  Movies.distinct('year')
    .then((years) => {
      res.status(200).json({
        message: 'fetched years successfully',
        years: years || [],
      });
    })
    .catch((err) => {
      nextError(err, next);
    });
}

export function getMoviesByYears(req: Request, res: Response, next: NextFunction) {
  const year = req.params.year;

  Movies.find({ year: year })
    .limit(5)
    .then((movies) => {
      res.status(200).json({
        message: 'fetched movies successfully',
        movies: movies || [],
      });
    })
    .catch((err) => {
      nextError(err, next);
    });
}
