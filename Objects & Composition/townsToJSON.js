function townsToJSON(input) {
    let titles = input.shift().split('|').filter(x => x !== '').map(x => x.trim());
    let map = [];

    input.forEach(element => {
        let info = element.split('|').filter(x => x !== '').map(x => x.trim());
        
        let [town, latitude, longitude] = titles;
        let [city, la, lo] = info;
        la = Number(la);
        lo = Number(lo);
        la = la.toFixed(2);
        lo = lo.toFixed(2);
        la = Number(la);
        lo = Number(lo);

        let townInfo = {
            [town]: city,
            [latitude]: la,
            [longitude]: lo
        }
        map.push(townInfo);
    });
    return JSON.stringify(map);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));