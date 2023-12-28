export default async function getCurrentCountry() {
  
  const response = await fetch(
      `https://api.ipdata.co?api-key=92951829ccc589561fd4bdc6b693c4ffa3dc9b512dee7d9bb7c802e9`
  );

  const data = await response.json();

  
  return { countryName: data.country_name, countryCode: data.country_code };
}
