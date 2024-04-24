"use client";
import Image from "next/image";
import Navbar from "./components/common/Navbar";
import Mainsection from "./components/homepage/Mainsection";
import BussinessPotential from "./components/homepage/BussinessPotential";
import ServicesArea from "./components/homepage/ServicesArea";
import ProjectsArea from "./components/homepage/ProjectsArea";
import Topics from "./components/homepage/Topics";
import Testimionials from "./components/common/Testimionials";
import Footer from "./components/common/Footer";
import EliteSquad from "./components/common/EliteSquad";
export default function Home() {
  const background = {
    backgroundImage: "url(/assets/bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div
        className="w-full min-h-screen brightness-[80px] relative overflow-hidden "
        style={background}
        id="bg"
      >
        <Mainsection />
        <BussinessPotential />
        <ServicesArea />
        <ProjectsArea />
        <EliteSquad className={"bg-[#1F1F1F]"}/>
        <Topics />
        <Testimionials />
      </div>
    </div>
  );
}
