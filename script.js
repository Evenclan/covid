const apiJoke = 'https://api.covid19api.com/summary';

async function getData() {
    const response = await fetch(apiJoke);
    const data = await response.json();

    const NewConfirmedPoland = data.Countries[164].NewConfirmed;
    const TotalConfirmedPoland = data.Countries[164].TotalConfirmed;
    const NewDeathsPoland = data.Countries[164].NewDeaths;
    const TotalDeathsPoland = data.Countries[164].TotalDeaths;
    const NewRecoveredPoland = data.Countries[164].NewRecovered;
    const TotalRecoveredPoland = data.Countries[164].TotalRecovered;

    const NewConfirmedPortugal = data.Countries[165].NewConfirmed;
    const TotalConfirmedPortugal = data.Countries[165].TotalConfirmed;
    const NewDeathsPortugal = data.Countries[165].NewDeaths;
    const TotalDeathsPortugal = data.Countries[165].TotalDeaths;
    const NewRecoveredPortugal = data.Countries[165].NewRecovered;
    const TotalRecoveredPortugal = data.Countries[165].TotalRecovered;

    const NewConfirmedSweden = data.Countries[199].NewConfirmed;
    const TotalConfirmedSweden = data.Countries[199].TotalConfirmed;
    const NewDeathsSweden = data.Countries[199].NewDeaths;
    const TotalDeathsSweden = data.Countries[199].TotalDeaths;
    const NewRecoveredSweden = data.Countries[199].NewRecovered;
    const TotalRecoveredSweden = data.Countries[199].TotalRecovered;

   console.log(data.Countries);


    document.getElementById('newCasesPoland').innerHTML = NewConfirmedPoland
    document.getElementById('allCasesPoland').innerHTML = TotalConfirmedPoland
    document.getElementById('newDeathsPoland').innerHTML = NewDeathsPoland
    document.getElementById('allDeathsPoland').innerHTML = TotalDeathsPoland
    document.getElementById('newCuredPoland').innerHTML = NewRecoveredPoland
    document.getElementById('allCuredPoland').innerHTML = TotalRecoveredPoland

    document.getElementById('newCasesPortugal').innerHTML = NewConfirmedPortugal
    document.getElementById('allCasesPortugal').innerHTML = TotalConfirmedPortugal
    document.getElementById('newDeathsPortugal').innerHTML = NewDeathsPortugal
    document.getElementById('allDeathsPortugal').innerHTML = TotalDeathsPortugal
    document.getElementById('newCuredPortugal').innerHTML = NewRecoveredPortugal
    document.getElementById('allCuredPortugal').innerHTML = TotalRecoveredPortugal

    document.getElementById('newCasesSweden').innerHTML = NewConfirmedSweden
    document.getElementById('allCasesSweden').innerHTML = TotalConfirmedSweden
    document.getElementById('newDeathsSweden').innerHTML = NewDeathsSweden
    document.getElementById('allDeathsSweden').innerHTML = TotalDeathsSweden
    document.getElementById('newCuredSweden').innerHTML = NewRecoveredSweden
    document.getElementById('allCuredSweden').innerHTML = TotalRecoveredSweden
    
}
getData();
