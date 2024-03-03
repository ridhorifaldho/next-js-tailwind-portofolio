import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-10">
            <div className="grid place-content-center lg:mb-28 lg:text-left">
                <h1 title="Ridho Rifaldho" className="text-[80px] leading-[70px]">
                    Ridho Rifaldho
                </h1>
                <div className="my-10 mb-10 space-y-5 text-2xl lg:mb-28">
                    <div className="flex flex-col">
                        <span className="font-light"> Software Developer </span>
                        <span> Portofolio </span>
                    </div>
                    <div>
                        I am a person who likes the world of programming, especially in the backend and I am very enthusiastic about learning technology.
                    </div>
                </div>
                <nav>
                    <Link legacyBehavior href="/">
                        <a className="border bg-slate-700 text-white border-slate-500 p-5 px-10">
                            GET IN TOUCH
                        </a>
                    </Link>
                </nav>
            </div>

            <div className="mt-10 w-full ls:w-1/2 h-[700px] lg:h-[700px] lg:mt-0">
                <img src="/photo/classicu%202024-01-18%20192648.563.JPG" alt="Ridho" className="w-full h-full object-cover"/>
            </div>
        </div>
    );
}
