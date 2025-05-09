import Link from 'next/link';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Home</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
