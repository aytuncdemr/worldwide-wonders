export default async function getCurrentCountry() {
  const response = await fetch(
    `https://api.ipdata.co?api-key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await response.json();

  
  return { countryName: data.country_name, countryCode: data.country_code };
}
