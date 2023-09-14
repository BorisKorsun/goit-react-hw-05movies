import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";


import SuspenseFallback from 'components/SuspenseFallback';

const SharedLayout = lazy(() => import("components/SharedLayout"))
const Home = lazy(() => import("pages/Home"))
const Movies = lazy(() => import("pages/Movies"))
const MovieDetails = lazy(() => import("pages/MovieDetails"))
const Cast = lazy(() => import("components/Cast"))
const Reviews = lazy(() => import("components/Reviews"))


export default function App() {
  return (
    <div>
      <Suspense fallback={<SuspenseFallback>Loading...</SuspenseFallback>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
}
