import MovieList from 'components/MovieList';

export default function Home() {
  return (
    <section>
      <MovieList movieList={["movie1", "movie2", "movie3", "movie4", "movie5"]}/>
    </section>
  );
}
