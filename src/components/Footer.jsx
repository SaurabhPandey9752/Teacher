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
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] text-[#20C863] underline">
                            Community
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline transition duration-300">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline transition duration-300">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline transition duration-300">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] text-[#20C863] underline">
                            Social Media
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline transition duration-300">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline transition duration-300">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline transition duration-300">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] text-[#20C863] underline">
                            About
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline transition duration-300">
                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline transition duration-300">
                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline transition duration-300">
                            <a href="mailto:pandeysaurabh9752@gmail.com" className="text-[15px] ml-[6px]">
                                pandeysaurabh9752@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="w-full text-center mt-[20px]">
                    <hr className="border-0 h-[2px] w-full bg-[#20C863] my-[10px]" />
                    <div className="text-[15px] text-gray-400 flex flex-col items-center">
                        <span>&copy; Made By Saurabh 11.06.2024 Inc.</span>
                        <a
                            href="mailto:pandeysaurabh9752@gmail.com"
                            className="mt-[10px] inline-block px-[12px] py-[6px] border-2 border-[#20C863] text-[#20C863] font-medium rounded-md hover:bg-[#20C863] hover:text-white transition duration-300"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
