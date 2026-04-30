import React from "react";
import "./page.css";
import Image from "next/image";
import Link from "next/link";
import { text } from "node:stream/consumers";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <Image
          src="/images/BellesLogo.png"
          alt="The Belles A Cappella Group Symbol"
          width={800}
          height={500}
          className="image"
        />
        <h1 className="title">The Belles</h1>
        <p className="subtitle">
          Meet the Belles! The newest a cappella group at Villanova. Full of vibrant energy and killer beats, the Belles are sure to knock you off your feet!
        </p>
      </section>
      <section className="section">
        <Link href='/music'>
        <h2 className="sectionTitle">What We're Singing</h2>
        </Link>
        <div className="embedContainer">
          <iframe
            className="spotify"
            src="https://open.spotify.com/embed/playlist/5l88iEvnF92c4OItvzCDvu?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="text">
          A fun mix of drama, nostalgia, and main character energy—“No Body, No Crime” brings the chaos, “Thinking of You” adds a soft throwback moment, and “II MOST WANTED” feels like a carefree drive with your best friend. Then “In the Kitchen” gets a little messy (in the best way of course), “Fernando” slows things down with dreamy vibes, and “Jessie’s Girl” ends it all with dramatic, sing-your-heart-out energy.
        </p>
      </section>

      <section className="section">
        <Link href='/members' className="imageWrapper">
        <Image
          src="/images/Belles/grouppic.jpg"
          alt="The Belles A Cappella Group Picture"
          width={800}
          height={500}
          className="image"
        />
        <div className="overlay">
            <span className="overlayText">Meet the Members</span>
        </div>
        </Link>
        <h2 className="sectionTitle">Our Members</h2>
        <p className="text">
          Our members do it all—from CLAS to the Engineering School, you’ll find Belles all over campus bringing music wherever they go.
        </p>
      </section>

      <section className="section">
        <Link href='/performances' className= "imageWrapper">
        <Image
          src="/images/Belles/perform.jpg"
          alt="Solo Singer Performing"
          width={800}
          height={500}
          className="image"
        />
        <div className="overlay">
            <span className="overlayText">See us sing!</span>
        </div>
        </Link>
        <h2 className="sectionTitle">Where We Perform</h2>
        <p className="text">
          We perform at our end of semester concerts, Admitted Students Day, Women's/Men's Basketball Games, NOVAdance, and the annual A Cappella Palooza.
        </p>
      </section>
      <section className="section">
        <Link href='/contact' className= 'imageWrapper'>
        <Image
          src="/images/Belles/action.jpg"
          alt="The Belles A Cappella Group singing on Stage together all holding mics"
          width={800}
          height={500}
          className="image"
        />
        <div className="overlay">
            <span className="overlayText">Get Involved!</span>
        </div>
        </Link>
        <h2 className="sectionTitle">Interested?</h2>
        <p className="text">
          If you love music and are looking to join a fun, supportive team, we encourage you to reach out to us! Also, look at the Belles Instagram for any audition information at the beginning of the semester.
        </p>
      </section>

    </main>
  );
}

const homeStyle = {
  backgroundColor: "white"
}
const textStyle = {
  color: "lightskyblue"
}
