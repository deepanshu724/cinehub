import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './index.css';
import Trending from './components/Trending';
import Popular from './components/popular';
import Movie from './components/movie';
import People from './components/people';
import Tv from './components/tv';
import Moviedetails from './components/moviedetails';

import Tvdetails from './components/Tvdetails';
import Persondetails from './components/Persondetails';
import Trailer from './template/Trailer';
import About from './components/about';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-[#1F1E24] w-full h-screen flex'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} >
        <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
