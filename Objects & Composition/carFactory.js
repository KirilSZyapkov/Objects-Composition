function carFactory(input) {
    let car = input;

    let smallEngine = {power: 90, volume: 1800};
    let normalEngine = {power: 120, volume: 2400};
    let monsterEngine = {power: 200, volume: 3500};
    let hatchback = {type: 'hatchback', color: ''};
    let coupe = {type: 'coupe', color: ''}

    if (input.power <= smallEngine.power) {
        delete input.power;
        car['engine'] = smallEngine;
    } else if (input.power <= normalEngine.power) {
        delete input.power;
        car['engine'] = normalEngine;
    } else if (input.power <= monsterEngine.power) {
        delete input.power;
        car['engine'] = monsterEngine;
    }

    if (hatchback.type === car.carriage) {
        delete car.carriage;
        hatchback.color = car.color;
        delete car.color;
        car['carriage'] = hatchback;
    } else if (coupe.type === car.carriage) {
        delete car.carriage;
        coupe.color = car.color;
        delete car.color;
        car['carriage'] = coupe;
    }

    let wheel = Number(car.wheelsize);
    let wheels = [];
    if (wheel % 2 === 0) {
        wheel--;
    }

    for(let a=0;a<4;a++){
        wheels.push(wheel);
    }

    delete car.wheelsize;
    car['wheels'] = wheels;

    return car
}

console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }));