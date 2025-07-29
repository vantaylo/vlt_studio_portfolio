import React from "react";
import Image from 'next/image'
import FirstCompImage from '../assets/firstCompImg.jpg';

const AboutMe = () => {
  return (
    <div style={aboutMeStyle}>
      <div>
        <Image
          alt="first computer"
          src={FirstCompImage}
          height={700}
          priority={true}
          width={500}
        />
    </div>
    <div>
      <p>Hi, I'm Vanessa! I'm a Senior Software Engineer ...</p>
      <p>Thats me and my first computer:</p>
    </div>
    
    </div>
  );
}

export default AboutMe;

const aboutMeStyle: React.CSSProperties = { backgroundColor: 'tan',  textAlign: 'center'};