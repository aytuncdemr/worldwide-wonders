"use client";

import SearchBar from "./SearchBar";
import HomeIcon from "@/public/images/homepage.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header(){

    const router = useRouter();


    function goToMainPageHandler(){
      router.push("/");
    }

    return (
        <header className="py-4 px-2 gap-2 flex lg:px-6 justify-center items-center sm:gap-2 md:gap-6 lg:justify-start xl:gap-12  ">
            <Image
                height={1080}
                width={1920}
                alt="Homepage"
                className="w-6 h-6 hover:cursor-pointer rounded-full sm:w-12 sm:h-12 md:w-16 md:h-16 xl:w-20 xl:h-20"
                src={HomeIcon}
                onClick={goToMainPageHandler}
            ></Image>
            <div className="bg-gray-200 py-2 max-w-full px-2 flex items-center gap-4 sm:text-xl md:text-2xl xl:text-3xl  sm:mx-0 sm:gap-6 rounded-lg header-container">
                <SearchBar></SearchBar>
            </div>
            <div className="links hidden ml-auto lg:block">
                <ul className="flex gap-4 text-xl xl:text-2xl">
                    <li>
                        <a href="https://github.com/aytuncdemr/worldwide-wonders/tree/main#readme">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aytun%C3%A7-demir-70339723a/">
                            Contact
                        </a>
                    </li>{" "}
                    <li>
                        <a href="https://github.com/aytuncdemr/worldwide-wonders">
                            Source Code
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}