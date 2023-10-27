export default async function fetchFromRestAPI(query:string){

    const response = await fetch(`https://restcountries.com/v3.1` + query);
    const data = await response.json();

    return data;
}