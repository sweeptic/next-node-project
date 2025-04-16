import { IMovies } from '@src/backend/src/models/movies';
import { notFound } from 'next/navigation';

export async function getMovieDetails(_id: string) {
  const response = await fetch(`http://localhost:8080/movies/${_id}`, {
    cache: 'no-store',
  });
  const { movieDetails }: { movieDetails: IMovies } = await response.json();

  if (!response.ok) {
    return notFound();
  }

  await waitingForLoading();
  return movieDetails;
}

export async function getAllMovies() {
  const response = await fetch('http://localhost:8080/movies', {
    cache: 'no-store',
  });
  const { movies }: { movies: IMovies[] } = await response.json();

  await waitingForLoading();
  return movies;
}

export async function getLatestMovies() {
  const response = await fetch('http://localhost:8080/movies', {
    cache: 'no-store',
  });
  const { movies }: { movies: IMovies[] } = await response.json();

  //   const actualYear = new Date().getFullYear();
  const latestMovies = movies.slice(0, 3);

  await waitingForLoading();
  return latestMovies;
}

export async function waitingForLoading() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function getAvailableNewsYears() {
  const response = await fetch('http://localhost:8080/get-available-movies-years', {
    cache: 'no-store',
  });
  const data = response.json();

  await waitingForLoading();

  return data;
}

export async function getMoviesForYear(year: number) {
  const response = await fetch(`http://localhost:8080/get-movies-by-years/${year}`, {
    cache: 'no-store',
  });
  const data = response.json();

  await waitingForLoading();

  return data;
}
