const covid = 'https://api.covid19api.com/summary';

async function getData() {
  const response = await fetch(covid);
  const data = await response.json();

  const countryObject = {}; 
//   const countryObject2 = {};

  for (let country of data.Countries) {
    countryObject[country.CountryCode] = country;
    // countryObject2[country.Slug] = country2
  }

  console.log(countryObject);
//   console.log(countryObject2);

  const NewConfirmedPoland = countryObject["PL"].NewConfirmed;
  const TotalConfirmedPoland = countryObject["PL"].TotalConfirmed;
  const NewDeathsPoland = countryObject["PL"].NewDeaths;
  const TotalDeathsPoland = countryObject["PL"].TotalDeaths;
  const NewRecoveredPoland = countryObject["PL"].NewRecovered;
  const TotalRecoveredPoland = countryObject["PL"].TotalRecovered;

  const NewConfirmedPortugal = countryObject["SE"].NewConfirmed;
  const TotalConfirmedPortugal = countryObject["SE"].TotalConfirmed;
  const NewDeathsPortugal = countryObject["SE"].NewDeaths;
  const TotalDeathsPortugal = countryObject["SE"].TotalDeaths;
  const NewRecoveredPortugal = countryObject["SE"].NewRecovered;
  const TotalRecoveredPortugal = countryObject["SE"].TotalRecovered;

  const NewConfirmedSweden = countryObject["PT"].NewConfirmed;
  const TotalConfirmedSweden = countryObject["PT"].TotalConfirmed;
  const NewDeathsSweden = countryObject["PT"].NewDeaths;
  const TotalDeathsSweden = countryObject["PT"].TotalDeaths;
  const NewRecoveredSweden = countryObject["PT"].NewRecovered;
  const TotalRecoveredSweden = countryObject["PT"].TotalRecovered;

  document.getElementById('newCasesPoland').innerHTML = NewConfirmedPoland;
  document.getElementById('allCasesPoland').innerHTML = TotalConfirmedPoland;
  document.getElementById('newDeathsPoland').innerHTML = NewDeathsPoland;
  document.getElementById('allDeathsPoland').innerHTML = TotalDeathsPoland;
  document.getElementById('newCuredPoland').innerHTML = NewRecoveredPoland;
  document.getElementById('allCuredPoland').innerHTML = TotalRecoveredPoland;

  document.getElementById('newCasesPortugal').innerHTML = NewConfirmedPortugal;
  document.getElementById('allCasesPortugal').innerHTML = TotalConfirmedPortugal;
  document.getElementById('newDeathsPortugal').innerHTML = NewDeathsPortugal;
  document.getElementById('allDeathsPortugal').innerHTML = TotalDeathsPortugal;
  document.getElementById('newCuredPortugal').innerHTML = NewRecoveredPortugal;
  document.getElementById(
    'allCuredPortugal'
  ).innerHTML = TotalRecoveredPortugal;

  document.getElementById('newCasesSweden').innerHTML = NewConfirmedSweden;
  document.getElementById('allCasesSweden').innerHTML = TotalConfirmedSweden;
  document.getElementById('newDeathsSweden').innerHTML = NewDeathsSweden;
  document.getElementById('allDeathsSweden').innerHTML = TotalDeathsSweden;
  document.getElementById('newCuredSweden').innerHTML = NewRecoveredSweden;
  document.getElementById('allCuredSweden').innerHTML = TotalRecoveredSweden;
}
getData();
