"use client";

import { ActiveCountryContext } from "@/components/home/contexts/ActiveCountryContext";
import { useContext, useEffect } from "react";
import InitialCountrySection from "@/components/country/InitialCountrySection";
import fetchFromRestAPI from "@/utils/fetchFromRestAPI";
import NeighboursSection from "@/components/home/NeighboursSection";
import CountryMapSection from "@/components/country/CountryMapSection";

export default function CountryPage({ params }: { params: { name: string } }) {
    const activeCountryContext = useContext(ActiveCountryContext);

    useEffect(() => {
        (async function () {
            const [activeCountryInfo] = await fetchFromRestAPI(
                `/name/${params.name}?fullText=true`
            );
            activeCountryContext?.setActiveCountry(activeCountryInfo);
        })();
    }, []);

    return (
        <main className="min-h-screen max-w-[72rem] mx-auto">
            <InitialCountrySection></InitialCountrySection>
            {activeCountryContext?.activeCountry?.capital && (
                <CountryMapSection
                    lat={
                        activeCountryContext?.activeCountry?.capitalInfo
                            ?.latlng[0] || 52.0
                    }
                    lng={
                        activeCountryContext?.activeCountry?.capitalInfo
                            ?.latlng[1] || 45.0
                    }
                ></CountryMapSection>
            )}
            <NeighboursSection></NeighboursSection>
        </main>
    );
}
