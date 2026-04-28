import React from 'react';
import Navbar from './Navbar';
import Image from "next/image";
import Hero from "./hero";
import About from "./about";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/*import { GoogleOAuthProvider } from '@react-oauth/google';

root.render (
  <GoogleOAuthProvider clientId="688636205022-k972ehmf7espdltolq1gjbj6hn01m9r6.apps.googleusercontent.com">
    <Home />
  </GoogleOAuthProvider>

);*/

export default function Home(){
  return(
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<About />} />
        <Route path="/music" element={<About />} />
        <Route path="/performances" element={<About />} />
        <Route path="/gallery" element={<About />} />
        <Route path="/contact" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}