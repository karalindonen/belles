"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";
import Image from "next/image";

export default function Home() {
  const [images, setImages] = useState([]);
  const [memberImages,setMemberImages] = useState([]);
  const [members, setMembers] = useState({});

  useEffect(() => {
    //Fetch images
    const imagesRef = ref(db, "images"); // ← your database path
    onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const imageList = Object.values(data);
        setImages(imageList);
      }
    });

    //fetch memberImages
    const memberImagesRef = ref(db,"memberImages");
    onValue(memberImagesRef, (snapshot)=> {
      const data = snapshot.val();
      if (data){
        setMemberImages(Object.values(data));
      }
    });

    // fetch members  ← make sure this is here
  const membersRef = ref(db, "members");
  onValue(membersRef, (snapshot) => {
    const data = snapshot.val();
    if (data) setMembers(data);
  });
  }, []);

  return (
    <div>
      <Header />
      <h2>Images</h2>
      <div className="grid">
        {images.map((img, index) => (<div key={index} className="grid-item">
          <Image src={img.path} alt={img.filename} width={550} height={550} />
        </div>
      ))}
      </div>
      <div className="container-md">
        <div className="text-center">
          <h1 className="section-heading text-uppercase" style={memberStyle}>Current Members</h1>
        </div>
        <div className="row">
          {memberImages.map((img, index) => {
  const memberName = filenameTomemberName(img.filename); // "Maya Harner"
  const member = Object.values(members).find(m => m.name === memberName);

  return (
    <div key={index} className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <a 
    href={`https://www.instagram.com/${member.socials}`} 
    target="_blank" 
    rel="noopener noreferrer"
  ><div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image src={img.path} alt={img.filename} width={300} height={300} style={imageStyle} />
      </div></a>
        {member && (
          <div className="portfolio-caption">
            <h2 className="portfolio-caption-heading" style={memberStyle}>{member.name}</h2>
            <h4>{member.position} | {member.class}</h4>
            <h6>{member.musicPart}</h6>
            <div className="portfolio-caption-subheading">
              {member.name} is majoring in {member["major(s)"]}
              {member["minor(s)"] && member["minor(s)"].length > 0
                ? ` with minor(s) in ${member["minor(s)"].join(", ")}`
                : ""}.
            </div>
          </div>
        )}
      </div>
    </div>
  );
})}
        </div>
      </div>
    </div>
  );
}

const imageStyle = {
  borderRadius: '10%',
}

const memberStyle = {
  color: "lightskyblue",
  padding: '10px'
}
function Section(){
  return (
  <section className="page-section">
    <div className="container">
      <h1>

      </h1>
    </div>
  </section>
  );
}
function Header(){
  return(
  <header className="masthead">
    <div className="container">
      <div className="masthead-heading text-uppercase">The Villanova Belles</div>
    </div>
  </header>
  );
}

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <div className="masthead-subheading">Villanova Belles</div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          " Menu "
        </button>
      </div>
    </nav>
  );
}

// Helper function to convert filename to member name
// "MayaHarner.png" → "Maya Harner"
function filenameTomemberName(filename) {
  const noExt = filename.replace(/\.[^/.]+$/, "");
  
  // Manual overrides for names that don't split cleanly
  const overrides = {
    "AnnabelleMcDonald": "Annabelle McDonald",
    "ErinMcFadden": "Erin McFadden",
  };

  if (overrides[noExt]) return overrides[noExt];

  // Default: add space before capitals
  return noExt.replace(/([A-Z])/g, " $1").trim();
}