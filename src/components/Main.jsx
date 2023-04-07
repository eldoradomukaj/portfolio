import React from "react"
import { FiArrowDown } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";
import { Button } from "./Button";
import Lottie from "react-lottie-player";
import animationData from "../../public/assets/computer.json";

function Main() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center content-center align-middle">
            <div>
                {/* <img className="bg-red-500 rounded-full" src="https://robohash.org/rgdbdh5hy5h5h" /> */}
                <Lottie loop play animationData={animationData} />
            </div>

            <h1 className="-mt-11 sm:mt-0">Hi, I&#8217;m { }
                <span className="text-[#0FFF95]">Eldorado</span>
            </h1>

            <h3 className="mt-4 lowercase text-[#4961c0] font-terminal font-light tracking-tight md:tracking-normal text-center md:text-start px-6 sm:px-4">Systems Engineer | Developer | Homelab Enthusiast</h3>

            <p className="max-w-lg text-sm md:text-base mt-8 px-8 sm:px-4 text-justify">Welcome to my portfolio website! I am a Systems Engineer, Developer, and Homelab Enthusiast with a passion for designing and implementing complex systems, building software applications, and tinkering with technology. </p>
        
            <a href="https://github.com/eldoradomukaj" className="mb-28 md:mb-0" target="_blank"><Button text="Github" icon={<VscGithubInverted size={34} />} /></a> 
        </div>

        <a href="#terminal" className="text-3xl py-1 md:p-2 absolute bottom-0 mb-0 md:mb-8 animate-bounce cursor-pointer"><FiArrowDown /></a>
    </main>
  )
}

export default Main