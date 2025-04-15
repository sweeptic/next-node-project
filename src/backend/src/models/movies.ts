import mongoose, { model } from 'mongoose';

import { RatingSchema } from './rating';

interface Awards {
  wins: number;
  nominations: number;
  text: string;
}

interface Imdb {
  _id: string;
  id: number;
  rating: number;
  votes: number;
}

interface Rating {
  _id: string;
  meter: number;
  numReviews: number;
  rating: number;
}

export interface IMovies {
  _id: string;
  awards: Awards;
  cast: string[];
  countries: string[];
  directors: string[];
  fullplot: string;
  genres: string[];
  imdb: Imdb;
  languages: string[];
  lastupdated: string;
  num_mflix_comments: number;
  plot: string;
  poster: string;
  released: Date;
  runtime: number;
  title: string;
  rated: string;
  tomatoes: {
    _id: string;
    fresh: number;
    rotten: number;
    lastUpdated: string;

    viewer: Rating;
    critic: Rating;
  };
  type: string;
  writers: string[];
  year: number;
}

const Schema = mongoose.Schema;

const MoviesSchema = new Schema<IMovies>({
  plot: {
    type: String,
  },
  genres: {
    type: [String],
  },
  lastupdated: {
    type: String,
  },
  runtime: {
    type: Number,
  },
  cast: {
    type: [String],
  },
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
  fullplot: {
    type: String,
  },
  languages: {
    type: [String],
  },
  released: {
    type: Date,
  },
  directors: {
    type: [String],
  },
  writers: {
    type: [String],
  },
  rated: {
    type: String,
  },
  awards: {
    type: Object,
  },
  year: {
    type: Number,
  },
  imdb: {
    type: new Schema({
      rating: { type: Number },
      votes: { type: Number },
      id: { type: Number },
    }),
  },
  countries: {
    type: [String],
  },
  type: {
    type: String,
  },

  tomatoes: {
    type: new Schema({
      viewer: RatingSchema,
      fresh: {
        type: Number,
      },
      critic: RatingSchema,
      rotten: {
        type: Number,
      },
      lastUpdated: {
        type: Date,
      },
    }),
  },
  num_mflix_comments: {
    type: Number,
  },
});

const Movies = model<IMovies>('Movies', MoviesSchema);

export default Movies;
