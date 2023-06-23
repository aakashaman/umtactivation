import React from 'react'
import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <Image
            src="/heropic.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            style={{ background: "#181A19", zIndex: "-1" }}
          />
          <div className="flex justify-center">
            <div style={{ width: "90%" }}></div>
            {/* <Image
              src="/heroimg.png"
              alt="Background Image"
              width={200}
              height={100}
              layout="responsive"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact