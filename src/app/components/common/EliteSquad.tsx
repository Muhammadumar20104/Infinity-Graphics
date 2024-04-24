import { useMotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import PersonCard from "./PersonCard";

function EliteSquad({className,txtcol="text-[#FFFFFF]",pcol="text-[#FFFFFF]"}:any) {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-100, 300], [-10, 10]);
  const cardRotateX = useTransform(cardY, [-200, 300], [25, -25]);
  const cardRotateY = useTransform(cardX, [-200, 300], [-10, 25]);
  console.log("rotatex", rotateX, "rotatecard", cardRotateX);

  const handleMouseMove = (event: any) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
      className={`bg-[#1F1F1F] ${className}`}
    >
      <div className=" py-[100px] md:container px-[30px] mx-auto">
        <div className="flex items-start max-md:flex-col justify-center">
          <div className="flex md:w-[75%] items-center justify-end">
            <h3 className={`font-spaceGrotesk text-[60px] ${txtcol} xsm:text-[70px] 2xl:text-[150px] uppercase leading-[120%] font-[500]`}>
              <span className="2xl:block">The Elite</span>
              <span className="2xl:block w-[690px]"> sAquad Of</span>
              <span className="2xl:block"> Builders</span>
            </h3>
          </div>

          <div className="md:w-[392px] flex flex-col gap-[30px] items-center md:gap-[140px]">
            <div className="ps-[65px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="120"
                viewBox="0 0 130 120"
                fill="none"
              >
                <path
                  d="M128.909 49.153L73.2035 66.6353L71.9915 67.0156L72.7878 68.0054L108.741 112.698L102.312 117.841L65.6557 72.2885L64.9805 71.4494L64.3053 72.2885L27.6487 117.841L21.22 112.698L57.1733 68.0054L57.9694 67.0158L56.7577 66.6353L1.08459 49.1512L3.52638 41.3117L59.7405 58.9506L60.8667 59.3039V58.1236V1.01364H69.0944V58.1236V59.3041L70.2207 58.9505L126.402 41.31L128.909 49.153Z"
                  fill="#FEFE34"
                  stroke="#1F1F1F"
                  stroke-width="1.73333"
                />
              </svg>
            </div>
            <p className={` ${pcol} text-[22px] flex justify-center font-[400] max-md:mb-[20px] leading-[160%] tracking-[0.11px]`}>
              We are a group of passionate creators spread across the globe,
              united by a singular purpose. JUST GREAT WORK
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-col 2xl:grid-cols-4">
          <div className="flex flex-col items-center justify-start">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img1.png"}
              className={"relative group md:mt-[-9rem]"}
              imgCss={" w-[278px]  h-auto"}
            />
            <div className="relative group  mt-[70px] rounded-[170px]">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img2.png"}
              className={"relative group "}
              imgCss={"self-end w-[340px] h-auto"}
            />
            </div>
            <div className="relative group  mt-[160px] rounded-[170px]">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img3.png"}
              className={"relative group md:mt-[-9rem]"}
              imgCss={"w-[340px] h-auto"}
            />
              {/* <motion.div
                style={{
                  perspective: 800,
                }}
                className="relative group md:mt-[-9rem]"
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
                    src="/assets/img3.png"
                    className="w-[340px] h-auto"
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
              </motion.div> */}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end pe-[30px] justify-start gap-[128px] mt-[100px]">
            <div className="relative group">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img4.png"}
              className={"relative group"}
              imgCss={"w-[278px] h-auto"}
            />
              {/* <motion.div
                style={{
                  perspective: 800,
                }}
                className="relative group "
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
                    src="/assets/img4.png"
                    className="w-[278px] h-auto"
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
              </motion.div> */}
            </div>
            <div className="relative group ">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img5.png"}
              className={"relative group"}
              imgCss={"w-[278px] h-auto"}
            />
              {/* <motion.div
                style={{
                  perspective: 800,
                }}
                className="relative group "
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
                    src="/assets/img5.png"
                    className="w-[278px] h-auto"
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
              </motion.div> */}
            </div>
            <div className="self-center">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img6.png"}
              className={""}
              imgCss={"w-[102px]  h-auto"}
            />
              {/* <Image
                src="/assets/img6.png"
                className="w-[102px]  h-auto"
                width={300}
                height={300}
                alt=""
              /> */}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[128px] mt-[180px]">
            <div className="relative group me-[23px] ">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img7.png"}
              className={"relative group "}
              imgCss={"w-[320px] self-end  h-auto"}
            />
              {/* <motion.div
                style={{
                  perspective: 800,
                }}
                className="relative group "
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
                    src="/assets/img7.png"
                    className="w-[320px] self-end  h-auto"
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
              </motion.div> */}
            </div>
            <div className="relative group ">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img8.png"}
              className={"relative group "}
              imgCss={"w-[278px] h-auto"}
            />
              {/* <motion.div
                style={{
                  perspective: 800,
                }}
                className="relative group "
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
                    src="/assets/img8.png"
                    className="w-[278px] h-auto"
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
              </motion.div> */}
            </div>
          </div>
          <div className=" flex flex-col lg:hidden 2xl:flex items-center justify-start max-md:mt-[40px] gap-[8px]">
            <div className="relative group flex justify-center ">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img9.png"}
              className={"relative group "}
              imgCss={"w-[278px] h-auto"}
            />
              {/* <motion.div
                style={{
                  perspective: 800,
                }}
                className="relative group "
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
                    src="/assets/img9.png"
                    className="w-[278px] h-auto"
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
              </motion.div> */}
            </div>
            <div className="relative max-md:mt-[100px] group flex justify-center ">
            <PersonCard
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRotateX={cardRotateX}
              cardRotateY={cardRotateY}
              rotateX={rotateX}
              rotateY={rotateY}
              image={"/assets/img10.png"}
              className={"relative group "}
              imgCss={"w-[278px] self-start h-auto"}
            />
              {/* <motion.div
                style={{
                  perspective: 800,
                }}
                className="relative group "
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
                    src="/assets/img10.png"
                    className="w-[278px] self-start h-auto"
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
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EliteSquad;
