import CustomImage from './image';
import { IMovies } from '@src/backend/src/models/movies';
import Link from 'next/link';

export default function MoviesList({ movies }: { movies: IMovies[] | undefined }) {
  return (
    <ul className="movies-list">
      {movies?.map((MovieItem: IMovies) => {
        return (
          <li key={MovieItem.title}>
            <Link href={`/movies/${MovieItem._id}`}>
              <CustomImage poster={MovieItem.poster} title={MovieItem.title} />
              <span>{MovieItem.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
