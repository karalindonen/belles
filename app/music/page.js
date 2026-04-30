"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function Music() {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const musicRef = ref(db, "musicMetadata");
    onValue(musicRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const musicList = Object.values(data);
        setMusic(musicList);
      }
    });
  }, []);

  return (
    <div className="container-md">
        <div className="text-center mt-5">
          <h1 className="section-heading text-uppercase" style={memberStyle}>Current Setlist</h1>
        </div>
      <div className="container mt-5">
        <div className="row">
          {music.map((song, index) => (
            <div key={index} className="col-lg-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title" style={titleStyle}>{song.title}</h4>
                  <h6 className="text-muted mb-3">{song.artist}</h6>

                  <p><strong>Arranged by:</strong> {song.arrangement}</p>

                  {song["vocal percussion"] && (
                    <p><strong>Vocal Percussion:</strong> {song["vocal percussion"]}</p>
                  )}

                  {song["soloist(s)"] && song["soloist(s)"].length > 0 && (
                    <p><strong>Soloist(s):</strong> {song["soloist(s)"].join(", ")}</p>
                  )}
                </div>

                <div className="card-footer">
                  {song.spotify && (<a
                    
                      href={song.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={spotifyStyle}
                    >
                      Listen on Spotify
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const titleStyle = {
  color: "lightskyblue",
};

const spotifyStyle = {
  color: "#1DB954",
  fontWeight: "bold",
  textDecoration: "none",
};

const memberStyle = {
  color: "lightskyblue",
  padding: '10px'
}
