"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";
import Image from "next/image";

export default function Members() {
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
      <div className="container-md">
        <div className="text-center mt-5 mb-5">
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