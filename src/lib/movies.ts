import { IMovies } from '@src/backend/src/models/movies';
import { notFound } from 'next/navigation';

export async function waitingForLoading() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function getMovieDetails(_id: string) {
  try {
    const response = await fetch(
      `http://localhost:8080/movies/${_id}`
      // { cache: 'no-store',}
    );
    const { movieDetails }: { movieDetails: IMovies } = await response.json();

    if (!response.ok) {
      return notFound();
    }

    await waitingForLoading();
    return movieDetails;
  } catch {
    return notFound();
  }
}

export async function getMovies(year?: string) {
  const params = new URLSearchParams();
  if (year) {
    params.append('year', year);
  }

  try {
    const response = await fetch(
      `http://localhost:8080/movies?${params}`
      // { cache: 'no-store',}
    );
    const { movies }: { movies: IMovies[] } = await response.json();

    await waitingForLoading();
    return movies;
  } catch {
    return notFound();
  }
}

export async function getLatestMovies() {
  try {
    const response = await fetch(
      'http://localhost:8080/movies'
      // {cache: 'no-store',}
    );
    const { movies }: { movies: IMovies[] } = await response.json();

    //   const actualYear = new Date().getFullYear();
    const latestMovies = movies.slice(0, 3);

    await waitingForLoading();
    return latestMovies;
  } catch {
    return notFound();
  }
}

export async function getAvailableNewsYears() {
  try {
    const response = await fetch(
      'http://localhost:8080/get-available-movies-years'
      // {cache: 'no-store',}
    );
    const data = response.json();

    await waitingForLoading();

    return data;
  } catch {
    return notFound();
  }
}
