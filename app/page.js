import React from 'react';
import Image from "next/image";
import Hero from "./hero";

export default function Home(){
  return(
    <div>
      <Header />
    </div>
  );
}

function Header(){
  return(
  <header className="masthead">
    <div className="container">
      <div className="masthead-heading"></div>
    </div>
  </header>
  );
}