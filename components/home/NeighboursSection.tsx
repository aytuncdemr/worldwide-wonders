import { ActiveCountryContext } from "@/components/home/contexts/ActiveCountryContext";
import fetchFromRestAPI from "@/utils/fetchFromRestAPI";
import { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function NeighboursSection() {
    const activeCountryContext = useContext(ActiveCountryContext);
    const borderCodes = activeCountryContext?.activeCountry?.borders;
    const [neighbours, setNeighbours] = useState<Country[] | null>(null);

    useEffect(() => {
        (async function () {
            if (borderCodes) {
                const promises = borderCodes.map((borderCode: string) =>
                    fetchFromRestAPI(`/alpha/${borderCode}`)
                );
                const responses = await Promise.all(promises);
                setNeighbours(responses.flat());
            }
        })();
    }, [activeCountryContext?.activeCountry?.name?.common]);

    return (
        <section className="neighbours-section px-4 mb-24 py-24">
            {neighbours && (
                <div className="neighbours-container">
                    <div className="neighbours-top-text">
                        <h2 className="text-center text-3xl mb-12 font-semibold text-gray-700 xl:text-4xl  lg:mb-16 xl:mb-24">
                            Neighbours of <br />{" "}
                            {activeCountryContext?.activeCountry?.name?.common}
                        </h2>
                    </div>

                    <div className="neighbours">
                        <ul className="grid xl:grid-cols-3 xl:gap-24 gap-8">
                            {neighbours.map((neighbour: Country, index) => {
                                return (
                                    <li key={index}>
                                        <CountryCard
                                            country={neighbour}
                                        ></CountryCard>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
