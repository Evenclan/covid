const covid = 'https://api.covid19api.com/summary';

async function getData() {
    const response = await fetch(covid);
    const data = await response.json();

    console.log(data.Countries);

    const NewConfirmedPoland = data.Countries[165].NewConfirmed;
    const TotalConfirmedPoland = data.Countries[165].TotalConfirmed;
    const NewDeathsPoland = data.Countries[165].NewDeaths;
    const TotalDeathsPoland = data.Countries[165].TotalDeaths;
    const NewRecoveredPoland = data.Countries[165].NewRecovered;
    const TotalRecoveredPoland = data.Countries[165].TotalRecovered;

    const NewConfirmedPortugal = data.Countries[166].NewConfirmed;
    const TotalConfirmedPortugal = data.Countries[166].TotalConfirmed;
    const NewDeathsPortugal = data.Countries[166].NewDeaths;
    const TotalDeathsPortugal = data.Countries[166].TotalDeaths;
    const NewRecoveredPortugal = data.Countries[166].NewRecovered;
    const TotalRecoveredPortugal = data.Countries[166].TotalRecovered;

    const NewConfirmedSweden = data.Countries[200].NewConfirmed;
    const TotalConfirmedSweden = data.Countries[200].TotalConfirmed;
    const NewDeathsSweden = data.Countries[200].NewDeaths;
    const TotalDeathsSweden = data.Countries[200].TotalDeaths;
    const NewRecoveredSweden = data.Countries[200].NewRecovered;
    const TotalRecoveredSweden = data.Countries[200].TotalRecovered;

    

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
