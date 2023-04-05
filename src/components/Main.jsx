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
            <div className="mb-0">
                {/* <img className="bg-red-500 rounded-full" src="https://robohash.org/rgdbdh5hy5h5h" /> */}
                <Lottie loop play isClickToPauseDisabled={true} animationData={animationData} />
            </div>

            <h1>Hi, I&#8217;m { }
                <span className="text-[#0FFF95]">Eldorado</span>
            </h1>

            <h3 className="mt-4 lowercase text-[#3a4d97] font-terminal font-extralight tracking-wide">Systems Engineer | Developer | Homelab Enthusiast</h3>

            <p className="max-w-lg mt-8 px-8 sm:px-4 text-justify">Welcome to my portfolio website! I am a Systems Engineer, Developer, and Homelab Enthusiast with a passion for designing and implementing complex systems, building software applications, and tinkering with technology. </p>
        
            <a href="https://github.com/eldoradomukaj" target="_blank"><Button text="Github" icon={<VscGithubInverted size={34} />} /></a> 
        </div>

        {/* <span className="text-3xl p-2 absolute bottom-0 mb-8 animate-bounce cursor-pointer"><FiArrowDown /></span> */}
    </main>
  )
}

export default Main