"use client";

import Image from "next/image";
import Link from "next/link";

export default function CountryCard({
    country,
    isDetailed = false,
}: {
    isDetailed?: boolean;
    country: Country;
}) {
    const flagUrl = country?.flags?.png || country?.flags?.svg;
    const languages = [];

    for (const language in country.languages)
        languages.push(country.languages[language]);

    return (
        <div className={`country-card h-full border max-w-[36rem] mx-auto overflow-hidden rounded-2xl border-gray-300 `}>
            {country.flag && flagUrl && (
                <>
                    <Image
                        alt={country.name?.common + " flag"}
                        width={1920}
                        height={1920}
                        src={flagUrl}
                        className={`mb-4 ${!isDetailed && "xl:h-52"}`}
                    ></Image>

                    <h2 className="text-center text-2xl font-semibold text-gray-700 md:text-3xl mb-6">
                        {country.name?.common}
                    </h2>
                    <div className="country-information flex px-3 mb-6 flex-col gap-4 text-xl md:text-2xl ">
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        {isDetailed && <p>Area: {country.area}</p>}
                        {isDetailed && (
                            <p>
                                Languages:  {" "}
                                {languages.map(
                                    (language: string, index: number) =>
                                        index < languages.length - 1
                                            ? language + ", "
                                            : language
                                )}
                                
                            </p>
                        )}
                    </div>
                    <div className={`${!isDetailed && "py-8"} text-center mb-2 `}>
                        <Link
                            className="text-blue-600 underline hover:text-blue-700 duration-150"
                            href={`/country/${country.name?.common}`}
                        >
                            Click for more 
                            information
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
