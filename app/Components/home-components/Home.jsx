import React from "react";
import { Poppins, Raleway } from "next/font/google";
import Image from "next/image";
import homeImg from "@/app/images/home-bg.jpg";

const fontPoppins = Poppins({
  weight: "800",
  style: "normal",
  subsets: ["latin"],
});
const fontRaleway = Raleway({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});
export default function Slider() {
  return (
    <div className="w-10/12 flex flex-wrap mb-2   md:mt-16 ">
      <div className="md:w-1/2 md:p-10 pt-16 md:pt-0 md:order-last">
        <Image
          src={homeImg}
          width={"auto"}
          height={"auto"}
          alt="home-image"
          className="w-full h-auto object-cover"
        ></Image>
      </div>
      <div className="md:w-1/2 flex  justify-center  md:p-10 flex-col md:h-[90vh] gap-3 ">
        <p className={`text-3xl ${fontRaleway.className}`}>Welcome to</p>
        <span className={`md:text-[6vw] text-5xl  ${fontPoppins.className}`}>
          DIGIBLOG
        </span>
        <p className={`pt-3 ${fontRaleway.className}`}>
          Where Digital Expertise Meets Creative Blogging. Explore the latest
          trends, Start your digital journey today!
        </p>
      </div>
    </div>
  );
}
