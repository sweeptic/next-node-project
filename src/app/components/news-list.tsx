import { IMovies } from '@src/backend/src/models/movies';
import Image from 'next/image';
import Link from 'next/link';

export default function MoviesList({ movies }: { movies: IMovies[] }) {
  //   console.log('movies', movies._id);

  return (
    <ul className="news-list">
      {movies.map((newsItem: IMovies) => {
        return (
          <li key={newsItem.title}>
            <Link href={`/news/${newsItem._id}`}>
              <Image
                src={newsItem.poster ?? `/assets/unavailable.jpg`}
                alt={newsItem.title}
                width={200}
                height={300}
                priority={true}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
