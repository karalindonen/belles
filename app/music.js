//import {useEffect, useState} from "react";
export default function Music() {
    /*const [tracks, setTracks] = useState([]);
    const token = 

  const playlistId = "YOUR_PLAYLIST_ID";*/

  
  return (
    <main>
      <h1> What we're listening to!</h1>
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5l88iEvnF92c4OItvzCDvu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <p>
        A fun mix of drama, nostalgia, and main character energy—“no body, no crime” brings the chaos, “Thinking of You” adds a soft throwback moment, and “II MOST WANTED” feels like a carefree drive with your best friend. Then “In the Kitchen” gets a little messy (in the best way of course), “Fernando” slows things down with some dreamy vibes, and “Jessie’s Girl” ends it all with just the right amount of dramatic, sing-your-heart-out energy.
      </p>
    </main>
  );
}