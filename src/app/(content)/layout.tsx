import '@src/app/globals.css';
import MainHeader from '@src/app/components/main-header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
