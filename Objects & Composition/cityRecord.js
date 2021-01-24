function cityRecord(arg1, arg2, arg3) {
    let city = {
        name: arg1,
        population: arg2,
        treasury: arg3,
    }
    return city;
}

console.log(cityRecord('Tortuga', 7000, 15000))