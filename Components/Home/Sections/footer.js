import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col px-35">
      <div className="flex justify-between mt-10">
        <h2 className="text-2xl font-semibold text-white hover:text-[#d87c49] cursor-pointer">
          Audiofy
        </h2>
        <ul className="flex gap-5 uppercase font-semibold text-[0.9rem]">
          <li className="text-white hover:text-[#d87c49] cursor-pointer">
            home
          </li>
          <li className="text-white hover:text-[#d87c49] cursor-pointer">
            headphones
          </li>
          <li className="text-white hover:text-[#d87c49] cursor-pointer">
            speakers
          </li>
          <li className="text-white hover:text-[#d87c49] cursor-pointer">
            earphones
          </li>
        </ul>
      </div>
      <div className="flex w-screen justify-around ">
        <div className="flex flex-col gap-8 pr-104 mt-6">
          <p className="text-[0.8rem] text-gray-400">
            Audiofy is an all in one stop to fulfill your audio needs. We re a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we re open 7 days a week.
          </p>
          <p className="pb-3 text-gray-400 text-[0.9rem]">
            Copyright 2021. AllRights Reserved
          </p>
        </div>
        <div className="flex p-10 text-2xl pr-[21.7%] gap-3">
          <a href="http://" target="_blank">
            <FaFacebookSquare className="text-white hover:text-[#d87c49] cursor-pointer" />
          </a>
          <a href="http://" target="_blank">
            <BsTwitterX className="text-white hover:text-[#d87c49] cursor-pointer" />
          </a>
          <a href="http://" target="_blank">
            <FaInstagram className="text-white hover:text-[#d87c49] cursor-pointer" />
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}
