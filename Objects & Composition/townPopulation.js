function townPopulation(input){
    let city = {};
    for (let element of input){
        let [name, population] = element.split(' <-> ');
        population = Number(population);

        if(!city.hasOwnProperty(name)){
            city[name] = population;
        } else {
            city[name] += population;
        }

    }

    for(let el in city){
        console.log(`${el} : ${city[el]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);