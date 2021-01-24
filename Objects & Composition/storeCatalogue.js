function storeCatalogue(input) {
    let myCatalog = [];
    let newCatalog = [];


    input.forEach(element => {
        let token = element.split(' : ');
        newCatalog.push(token);
    })

    newCatalog.sort((a, b) => a[0].localeCompare(b[0]));

    for (let a = 0; a < newCatalog.length; a++) {
        let letter = newCatalog[a][0][0];
        if (!myCatalog.includes(letter)) {
            myCatalog.push(letter);
        }
    }

    for (let b = 0; b < myCatalog.length; b++) {
        console.log(myCatalog[b]);
        for (let c = 0; c < newCatalog.length; c++) {
            let firstLeter = myCatalog[b];
            let firstWord = newCatalog[c][0][0];
            if (firstLeter === firstWord) {
                console.log(`  ${newCatalog[c].join(': ')}`);
            }
        }
    }

}

storeCatalogue(['Banana : 2',
    'Rubic s Cube : 5',
'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)