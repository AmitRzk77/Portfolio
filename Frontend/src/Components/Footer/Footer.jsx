import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-1 items-center"
    >
      <div>
        
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          ameetrajak30000@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/username
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/AmitRzk77
        </li>
      </ul>
    </div>
  );
};

export default Footer;
