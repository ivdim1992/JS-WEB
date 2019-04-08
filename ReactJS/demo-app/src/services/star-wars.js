const apiUrl = 'https://swapi.co/api/people/';


const getPeople = () => {
    return fetch(apiUrl)
    .then(res => res.json())   
    .then(json => json.results) 
    .catch(err => console.log(err));
}

export default getPeople;