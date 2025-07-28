import React from "react";
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div>
      <Image
        alt="first computer"
        src="/assets/firstCompImg.png"
        height={1000}
        priority={true}
        width={1000}
      />
    </div>
  );
}

export default AboutMe;
