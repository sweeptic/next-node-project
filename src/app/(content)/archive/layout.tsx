export default function ArchiveLayout({ archive, latest }: { archive: React.ReactNode; latest: React.ReactNode }) {
  //   console.log('archive', archive);
  //   console.log('latest', latest);

  return (
    <div>
      <section>{archive}</section>
      <section>{latest}</section>
    </div>
  );
}
