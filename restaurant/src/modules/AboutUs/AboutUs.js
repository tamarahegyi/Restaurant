import React from "react";
import "./AboutUs.css";
import Myvideo from "../assets/about us video.mp4";
import Photo1 from "../assets/about-us1.jpg";
import Photo2 from "../assets/about-us2.jpg";
import Photo5 from "../assets/about-us5.jpg";
import Photo4 from "../assets/about-us4.jpg";

function AboutUs() {
  return (
    <div className="about-us-main-section">
      <div className="about-us-welcom-message">
        <h1 className="about-us-meet">
          Meet the creators and read about their journey
        </h1>
      </div>
      <div className="about-us-video-section">
        <video
          className="about-us-video"
          src={Myvideo}
          autoPlay
          muted
        ></video>
        <h2 className="this-is-us">This is us</h2>
      </div>
      <div className="section1">
        <img className="about-us-photo1" src={Photo1} alt="street"></img>
        <div className="arrow"></div>
        <section className="about-us1">
          Nestled in the heart of Madrid, our restaurant is surrounded by the
          charm of little streets that invite you to explore the city’s vibrant
          spirit. The atmosphere is electric, with an amazing vibe that captures
          the essence of Madrid’s unique culture. Every corner you turn brings a
          new discovery, whether it's a hidden gem of a shop or the warm glow of
          historic buildings. Our location is not just central—it's the perfect
          blend of tradition and modernity. It's a place where the energy of the
          city meets the tranquility of our cozy hideaway. Come experience the
          pulse of Madrid right outside our doors.
        </section>
      </div>
      <div className="section2">
        <img className="about-us-photo2" src={Photo2} alt="street"></img>
        <section className="about-us2">
          At our restaurant, we pride ourselves on sourcing the finest quality
          ingredients from local farms. We believe in the power of natural,
          fresh produce, which is why we partner directly with farmers who share
          our passion for sustainable agriculture. Every dish we serve is a
          testament to the care and dedication of these farmers, ensuring that
          you enjoy food that is not only delicious but also responsibly
          sourced. Our commitment to natural ingredients means that you can
          taste the difference in every bite. We pay our farmers directly,
          fostering a relationship that supports the local community and
          guarantees the highest quality. When you dine with us, you’re not just
          enjoying a meal—you’re supporting a way of life.
        </section>
      </div>
      <div className="section3">
        <img className="about-us-photo3" src={Photo5} alt="street"></img>
        <section className="about-us3">
          Every other weekend, our restaurant transforms into a haven for music
          lovers, with live performances from some of the best local bands. The
          air fills with melodies that perfectly complement our inviting
          atmosphere, creating an unforgettable dining experience. These
          performances are more than just entertainment—they're a celebration of
          the local music scene and the artists who bring it to life. Whether
          you're a fan of jazz, indie, or traditional Spanish tunes, our live
          music nights offer something for everyone. The rhythm and beats become
          the backdrop to your evening, adding a dynamic layer to your time with
          us. Join us for a meal, and stay for the music that echoes the soul of
          Madrid.
        </section>
      </div>
      <div className="section4">
        <img className="about-us-photo4" src={Photo4} alt="street"></img>
        <section className="about-us4">
          Our team is made up of passionate individuals who bring their
          creativity and dedication to everything they do. We believe in giving
          our employees the time and space they need to express their talents,
          which translates into exceptional service and innovative dishes. Every
          member of our staff is encouraged to live out their creativity,
          whether they’re crafting a new dish or ensuring that every guest feels
          at home. This passion is the heart of our restaurant, driving us to
          continually improve and evolve. We know that a happy team makes for a
          happy dining experience, and that’s why we prioritize our employees'
          well-being. When you visit us, you’re not just dining—you’re
          experiencing the artistry of our dedicated team.
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
