import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
function PersonCard({
  handleMouseMove,
  handleMouseLeave,
  cardRotateX,
  cardRotateY,
  rotateX,
  rotateY,
  image,
  className,
  imgCss,
}: any) {
  return (
    <div>
      <motion.div
        style={{
          perspective: 800,
        }}
        className={`${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
          }}
        >
          <Image
            src={image}
            className={`${imgCss}`}
            width={300}
            height={300}
            alt=""
          />
        </motion.div>
        <motion.span
          key="card"
          style={{
            boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.45)",
            borderRadius: 10,
            transformStyle: "preserve-3d",
            perspective: 800,
            rotateX: cardRotateX, // Use the transformed motion values for 3D rotation
            rotateY: cardRotateY,
          }}
          transition={{ velocity: 0 }}
          className="text-[#FFFFFF] font-spaceGrotesk text-[40px] font-[500]  bg-[#ffffff63] backdrop-blur-[1.875em] absolute group-hover:opacity-100 opacity-0 top-0 left-0 right-0 bottom-0 w-[300px] h-full flex items-center justify-center transition-all duration-75"
        >
          John Doe
        </motion.span>
      </motion.div>
    </div>
  );
}

export default PersonCard;
