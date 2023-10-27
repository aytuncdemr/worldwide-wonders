"use client";

import { ActiveCountryContext } from "@/components/home/contexts/ActiveCountryContext";
import { useContext } from "react";
import Image from "next/image";

export default function InitialCountrySection() {
    const activeCountryContext = useContext(ActiveCountryContext);
    const country = activeCountryContext?.activeCountry;
    const flagUrl = country?.flags?.png || country?.flags?.svg;
    const languages = [];
    const currencies = [];

    if (country) {
        for (const language in country.languages)
            languages.push(country.languages[language]);

        for (const currency in country.currencies)
            currencies.push(country.currencies[currency]);
    }

    return (
        <section className="initial-country-section py-16 md:py-32 px-4">
            {country && flagUrl && (
                <div className="initial-country-container">
                    <div className="initial-country-top-text text-center mb-6 ">
                        <h2 className="text-gray-700  xl:text-4xl text-3xl mb-12 lg:mb-16 xl:mb-24   ">
                            {country.name?.common} {country.flag}
                        </h2>
                        <Image
                            width={1920}
                            height={1080}
                            src={flagUrl}
                            alt={"flag of " + country.name?.common}
                        ></Image>
                    </div>

                    <div className="initial-country-information flex flex-col gap-2 px-1 text-xl xl:text-2xl font-semibold text-gray-700 ">
                        <p>
                            Capital: {country.capital} (
                            {country.capitalInfo?.latlng[0] +
                                "'," +
                                country.capitalInfo?.latlng[1] +
                                "'"}
                            )
                        </p>
                        <p>Population: {country.population}</p>
                        <p>Area: {country.area}</p>
                        <p>Country Code (cca2): {country.cca2}</p>
                        <p>Independent: {country.independent ? "Yes" : "No"}</p>
                        {country.timezones && (
                            <p>Timezone: {country.timezones[0]}</p>
                        )}
                        <p>
                            Currencies:{" "}
                            {currencies.map(
                                (
                                    currency: { name: string; symbol: string },
                                    index: number
                                ) =>
                                    index < currencies.length - 1
                                        ? `${currency.name} (${currency.symbol}),`
                                        : `${currency.name} (${currency.symbol})`
                            )}
                        </p>
                        <p>
                            Languages:{" "}
                            {languages.map((language: string, index: number) =>
                                index < languages.length - 1
                                    ? language + ", "
                                    : language
                            )}
                        </p>
                        <p>Region: {country.region}</p>
                        <p>
                            Continents:{" "}
                            {country.continents?.map(
                                (continent: string, index: number) =>
                                    country.continents?.length &&
                                    index != country.continents?.length - 1
                                        ? continent + ","
                                        : continent
                            )}
                        </p>
                        <p>
                            Other Names:{" "}
                            {country.altSpellings?.map(
                                (spelling: string, index: number) =>
                                    country.altSpellings?.length &&
                                    index < country.altSpellings?.length - 1
                                        ? spelling + ","
                                        : spelling
                            )}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
