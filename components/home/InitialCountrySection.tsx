"use client";

import { ActiveCountryContext } from "@/components/home/contexts/ActiveCountryContext";
import { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import fetchFromRestAPI from "@/utils/fetchFromRestAPI";

export default function InitialCountrySection() {
    const activeCountryContext = useContext(ActiveCountryContext);

    console.log(activeCountryContext?.activeCountry);
    return (
        <section className="initial-country-section py-16 xl:py-32 px-4">
            {activeCountryContext?.activeCountry && (
                <div className="initial-country-container">
                    <header className="initial-country-top-text text-center">
                        <h2 className="font-semibold text-gray-700  xl:text-4xl text-3xl mb-12 lg:mb-16 xl:mb-24 ">
                            You are connecting <br /> from{" "}
                            {activeCountryContext?.activeCountry.name?.common}
                        </h2>
                    </header>
                    <div className="initial-country-card flex justify-center">
                        <CountryCard
                            isDetailed={true}
                            country={activeCountryContext.activeCountry}
                        ></CountryCard>
                    </div>
                </div>
            )}
        </section>
    );
}
