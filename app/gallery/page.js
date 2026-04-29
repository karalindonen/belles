"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";
import Image from "next/image";
import Masonry from "react-masonry-css";

const breakpointColumns = {
  default: 3,  // 3 columns on large screens
  1100: 2,     // 2 columns on medium screens
  700: 1       // 1 column on small screens
};

export default function Gallery() {
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
  }, []);

  return (
    <div className="container-md">
      <div className="text-center">
          <h1 className="section-heading text-uppercase" style={memberStyle}>Gallery</h1>
        </div>
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {images.map((img, index) => (
          <div key={index} className="masonry-item">
            <Image
              src={img.path}
              alt={img.filename}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
  /*
  return (
    <div>
      <div className="grid">
        {images.map((img, index) => (<div key={index} className="grid-item">
          <Image src={img.path} alt={img.filename} width={450} height={450} />
        </div>
      ))}
      </div>
    </div>
  );
  */
}

const imageStyle = {
  borderRadius: '10%',
}

const memberStyle = {
  color: "lightskyblue",
  padding: '10px'
}
