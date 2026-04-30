export default function Performances () {
    return (
        <main className="performances-page container py-5">
            <div className = "row kjustify content-center">
            <h1 className="section-heading text-center text-uppercase mb-4" style={memberStyle}>Performances</h1>

            <p className="lead text-center mb-0">Each semester, the Villanova Belles perform at numerous 
                events. Here are some of our performances from our first semester!</p>
            
            <section className="row g-4 mt-1">
                <div className="col-md-5 col-lg-4">
                    <div className="card-body">
                    <h2 className="card-title h5">Spring Concert 2026</h2>
                    <p><strong>Date: </strong>April 12, 2026</p>
                    <p>
                        We had our first semester concert where performed all of our semester
                         repertoire. We were fortunate to perform alongside the Haveners and Supernovas.
                    </p>
                    </div>
                </div>

                <div className="col-md-5 col-lg-4">
                    <div className="card-body">
                    <h2 className="card-title h5">Admitted Students Day 2026</h2>
                    <p><strong>Date: </strong>April 11, 2026</p>
                    <p>Performed "No Scrubs" and "You're Still The One" at the Involvement Fair.</p>
                    </div>
                </div>

                <div className="col-md-5 col-lg-4">
                    <div className="card-body">
                    <h2 className="card-title h5">NOVAdance 2026</h2>
                    <p><strong>Date: </strong>March 28, 2026</p>
                    <p>Performed "No Scrubs" at NOVAdance at Cabrini!</p>
                    </div>
                </div>

                <div className="col-md-5 col-lg-4">
                    <div className="card-body">
                    <h2 className="card-title h5">A Cappella Palooza 2026</h2>
                    <p><strong>Date: </strong>March 20, 2026</p>
                    <p>
                        First Palooza and Villanova debut with all the a cappella groups!! Performed 
                        our A Cappella Palooza setlist of "No Scrubs", "So Easy (To Fall In Love)", and "Heart Attack".
                    </p>
                    </div>
                </div>

                <div className="col-md-5 col-lg-4">
                    <div className="card-body">
                    <h2 className="card-title h5">Women's Basketball Game</h2>
                    <p><strong>Date: </strong>January 18, 2026</p>
                    <p>Our debut as a group! We performed the National Anthem for the Women's Basketball Game.</p>
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
}

const memberStyle = {
  color: "lightskyblue",
  padding: "10px",
};