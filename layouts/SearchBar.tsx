"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import fetchFromRestAPI from "@/utils/fetchFromRestAPI";
import SearchModal from "./SearchModal";
import ReactDOM from "react-dom";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function SearchBar() {
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [countryNames, setCountryNames] = useState<string[] | null>([]);
    const [foundedCountryNames, setFoundedCountryNames] = useState<
        string[] | null
    >([]);
    const pathName = usePathname();
    useEffect(() => {
        (async function () {
            const data: Country[] = await fetchFromRestAPI("/all");

            data.map((country: Country) =>
                countryNames?.push(country.name?.common || "null")
            );
        })();
    }, []);

    useEffect(() =>{

        setFoundedCountryNames([]);
        setIsSearching(false);

    },[pathName]);

    function searchQueryHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (countryNames) {
            setFoundedCountryNames([
                ...new Set(
                    countryNames.filter(
                        (countryName: string, index: number) => {
                            return countryName
                                .toLocaleLowerCase()
                                .includes(
                                    event.target.value.toLocaleLowerCase()
                                );
                        }
                    )
                ),
            ]);
        }
        if(!event.target.value)
            setFoundedCountryNames([]);

    }

    function searchClickHandler() {
        
        setIsSearching((prevState:boolean) => !prevState);
        
        if (!isSearching) {
            //@ts-ignore
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
            document.getElementById("search-bar")?.focus();
        }
        
        //@ts-ignore
        else {
            document.body.style.overflow = "initial";
            setFoundedCountryNames([]);
        }

    }

    return (
        <div
            onClick={searchClickHandler}
            className="search-bar flex flex-col relative z-10"
        >
            <div
                className={`flex gap-4 items-center ${
                    foundedCountryNames &&
                    foundedCountryNames?.length > 0 &&
                    "mb-6"
                }`}
            >
                <FontAwesomeIcon
                    icon={isSearching ? faClose : faSearch}
                ></FontAwesomeIcon>
                <input
                    onChange={searchQueryHandler}
                    type="text"
                    className="bg-inherit outline-none"
                    id="search-bar"
                    placeholder="Search country..."
                />
            </div>
            <ul className="flex flex-col gap-2">
                {foundedCountryNames?.map(
                    (countryName: string, index: number) => {
                        return (
                            <li key={index}>
                                <Link href={`/country/${countryName}`} className="text-xl text-center bg-white rounded-lg">
                                    {countryName}
                                </Link>
                            </li>
                        );
                    }
                )}
            </ul>
            {isSearching &&
                ReactDOM.createPortal(
                    <SearchModal></SearchModal>,
                    document.body
                )}
        </div>
    );
}
