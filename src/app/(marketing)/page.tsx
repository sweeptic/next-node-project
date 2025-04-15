import Link from 'next/link';

export default function Home() {
  return (
    <div id="home">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla rem dignissimos ea consequuntur! Sapiente est
        libero dolor aspernatur rerum!
      </p>

      <Link href="/movies">Read the latest Movies</Link>
    </div>
  );
}
