import React from "react";
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div>
      <Image src="/assets/firstCompImg.png" alt="first computer" height={1000} priority={true} width={1000}/>
    </div>
  );
}

export default AboutMe;
