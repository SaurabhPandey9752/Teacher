import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
       

                <div className="w-full text-center ">
                    <hr className="border-0 h-[2px] w-full bg-[#20C863] my-[10px]" />
                    <div className="text-[15px] text-gray-400 flex flex-col items-center mb-[80px]">
                        <span>&copy; Made By Saurabh 11.06.2024 Inc.</span>
                        <a
                            href="mailto:pandeysaurabh9752@gmail.com"
                            className="mt-[10px] inline-block px-[12px] py-[6px] border-2 border-[#20C863] text-[#20C863] font-medium rounded-md hover:bg-[#20C863] hover:text-white transition duration-300"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
           
    );
};

export default Footer;
