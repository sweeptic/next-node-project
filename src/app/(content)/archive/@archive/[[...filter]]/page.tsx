import { getAvailableNewsYears, getMovies } from '@src/lib/movies';
import { IMovies } from '@src/backend/src/models/movies';
import Link from 'next/link';
import MoviesList from '@src/app/components/movies-list';
import { Suspense } from 'react';

async function FilterHeader({ year }: { year: string }) {
  const { years }: { years: number[] } = await getAvailableNewsYears();

  if (year && !years.includes(+year)) {
    throw new Error('Invalid filter.');
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {years.map((link) => {
            const href = `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredMovies({ year }: { year: string }) {
  let moviesList: IMovies[] = [];

  if (year) {
    const movies = await getMovies(year);
    moviesList = movies;
  }

  let moviesContent = <p>No movies found for the selected period.</p>;

  if (moviesList && moviesList.length > 0) {
    moviesContent = <MoviesList movies={moviesList} />;
  }

  return moviesContent;
}

type PageProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Promise<any> | undefined;
};

export default async function Page({ params }: PageProps) {
  const { filter } = await params;

  const selectedYear = filter?.[0];

  return (
    <div>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} />
      </Suspense>
      <Suspense fallback={<p>Loading filtered movies...</p>}>
        <FilteredMovies year={selectedYear} />
      </Suspense>
    </div>
  );
}
