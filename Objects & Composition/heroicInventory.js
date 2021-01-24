function heroicInventory(input) {
    let heroList = [];

    input.forEach(element => {
        let [name, level, items] = element.split(' / ');
        let hero = {
            name: '',
            level: '',
            items: '',
        }
        hero.name = name;
        hero.level = Number(level);
        hero.items = items ? items.split(', ') : [];

        heroList.push(hero);
    });
    return JSON.stringify(heroList);
}

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));