"use client";

import getCurrentCountry from "@/utils/getCurrentCountry";
import { useContext, useEffect } from "react";
import { ActiveCountryContext } from "@/components/home/contexts/ActiveCountryContext";
import InitialCountrySection from "@/components/home/InitialCountrySection";
import NeighboursSection from "@/components/home/NeighboursSection";
import fetchFromRestAPI from "@/utils/fetchFromRestAPI";

export default function Home() {
    const activeCountryContext = useContext(ActiveCountryContext);

    useEffect(() => {
        (async function () {
            const activeCountry = await getCurrentCountry();
            const [activeCountryInfo] = await fetchFromRestAPI(
                `/name/${activeCountry.countryName}`
            );
            //@ts-ignore
            activeCountryContext.setActiveCountry(activeCountryInfo);
        })();
    }, []);

    return (
        <main className="max-w-[72rem] mx-auto min-h-screen">
            <>
                <InitialCountrySection></InitialCountrySection>
                <NeighboursSection></NeighboursSection>
            </>
        </main>
    );
}
