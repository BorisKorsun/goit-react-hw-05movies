import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>}/>
        </Route>
      </Routes>
    </div>
  );
}
