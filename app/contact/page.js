"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";
import Image from "next/image";

export default function Contact () {
    const [contactInfo, setContactInfo] = useState([]);

   useEffect(() => {
    const contactRef = ref(db, "contactInfo");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setContactInfo(data);
      }
    });
  }, []);

   console.log(contactInfo);

    return (
        <div className="container-md">
        <div className="text-center mt-5 mb-5">
          <h1 className="section-heading text-uppercase" style={memberStyle}>Contact Us</h1>
        </div>
        <div className="row align-items-center">
        <div className="col-lg-8">
            <div style={{ position: "relative", width: "100%", height: "500px" }}>
              <Image
                src="/images/contact.jpg"
                alt="The Belles"
                fill
                style={{ objectFit: "cover", borderRadius: "15px" }}
              />
            </div>
        </div>
        <div className="col-lg-4">
            <div style={cardStyle}>
                <h3 style={titleStyle}>Get In Touch</h3>
                <p>We would love to hear from you!</p>
                <hr />

                {contactInfo.email && (
                    <div className="mb-3">
                        <strong>Email</strong>
                        <p><a href={'mailto:${contactInfo.email}'} style={linkStyle}>{contactInfo.email}</a></p>
                    </div>
                )}

                {contactInfo.instagram && (
                    <div className="mb-3">
                        <strong>Instagram</strong>
                        <p><a href={`https://www.instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>{contactInfo.instagram}</a></p>
                    </div>
                )}

                {/* {contactInfo.youtube && (
                    <div className="mb-3">
                        <strong>Youtube</strong>
                        <p><a href={`https://www.youtube.com/${contactInfo.youtube}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>{contactInfo.youtube}</a></p>
                    </div>
                )} */}

                {/* {contactInfo.tiktok && (
                    <div className="mb-3">
                        <strong>TikTok</strong>
                        <p><a href={`https://www.tiktok.com/${contactInfo.tiktok}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>{contactInfo.tiktok}</a></p>
                    </div>
                )} */}

                {contactInfo.vuSPA && (
                    <div className="mb-3">
                        <strong>Villanova Student Performing Arts</strong>
                        <p><a href={contactInfo.vuSPA} target="_blank" rel="noopener noreferrer" style={linkStyle}>Check out Villanova's Student Performing Arts!</a></p>
                    </div>
                )}
            </div>
        
        </div>
        </div>
    </div>
        // <div className="contact-page">
        //     <h2>Contact Us</h2>
        //     <h3>General</h3>
        //     <p><strong>Executive Director: Katie Koslow</strong>
        //     kkoslow@villanova.edu</p>
            
        // </div>
    );
}

const memberStyle = {
  color: "lightskyblue",
  padding: '10px'
}

const titleStyle = {
  color: "lightskyblue",
};

const linkStyle = {
  color: "lightskyblue",
  textDecoration: "none",
};

const spotifyStyle = {
  color: "#1DB954",
  fontWeight: "bold",
  textDecoration: "none",
};

const cardStyle = {
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};