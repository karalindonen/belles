export default function About() {
  return (
    <main className="about-page container py-5">
      <div className="row justify-content-center">
        <h1 className="section-heading text-center text-uppercase style={memberStyle}">About Us</h1>
        
        <div className ="about-card p-4 p-md-5 shadow-sm">
        <p className="lead mb-4">
          The Villanova Belles is the newest all-treble a cappella group at Villanova University. Founded in the fall of 2025 by sophomores Katie 
          Koslow and Maya Harner, the Belles were created to provide more opportunities for Villanova students to pursue their passion for music in a
          fun, welcoming space. Recognizing the competitiveness and exclusivity that can exist within the a cappella community, Koslow and Harner 
          sought to help expand opportunities for student performers and contribute to the continued growth of musical arts on campus.
        </p>
        <p className="lead mb-4">
          The Belles is the ninth a cappella group at Villanova University. Our repertoire spans a variety of genres, from pop to indie and everything 
          in between. We are always excited to collaborate with other organizations both on and off campus. While we love performing, we also take 
          pride in the strong sisterhood we've built offstage, where friendship and shared passion bring us together. Through hard work, creativity, 
          and community, the Belles strive to create music as we continue growing and shaping a welcoming space for musicians at Villanova.
        </p>
        </div>
      </div>
    </main>
  );
}

const memberStyle = {
color: "lightskyblue",
  padding: '10px'
}