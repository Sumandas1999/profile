import React from "react";
import logo from "../images/bitcoin.svg";
import insta from "../images/instagram.svg";
import git from "../images/github.svg";
import walk from "../lotties/walking-man.json";
import link from "../images/linkedin.svg";
import phone from "../images/phone-solid.svg";
import { Player } from "@lottiefiles/react-lottie-player";
const Footer = () => {
  return (
    <div className="bg-orange-50 h-48 pt-4  px-8 flex place-content-around ">
      <div className="flex items-start flex-col ">
        
        <div className="flex ">
        <h2 className="text-2xl  "> Let's talk about work </h2>
          <img src={logo} className="image" />
        </div>
        <div>
          
          <p>Looking forward to hearing from you soon.</p>
          <p>Drop me an email</p>
          <p className="text-blue-700 ">ku2sumandas1999@gmail.com</p>
        </div>
      </div>
      <Player
        src={walk}
        className="player flex  flex justify-start hover:justify-between"
        loop
        autoplay
        speed={1}
        style={{ height: "200px", width: "200px" }}
      />

      <div className="flex flex-col justify-self-end  space-y-4">
        <div>
          <ul className="flex-row space-y-1 text-end">
            {/* <li> About</li>
            <li>Projects</li>
            <li>Blog</li> */}
          </ul>
        </div>
        <div className="flex space-x-4 ">
          {/* <img src={git} className=" h-6 w-6" />
          <img src={link} className=" h-6 w-6" />
          <img src={insta} className=" h-6 w-6" />
          <img src={phone} className=" h-6 w-6" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
