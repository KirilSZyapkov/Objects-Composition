function fromJSONToHTMLTable(input) {
    let list = {};
    input = JSON.parse(input);
    console.log('<table>');
    for (let obj of input) {
        let keys = Object.keys(obj);

        for (let key of keys) {
            if (!list.hasOwnProperty(key)) {
                list[key] = [];
            }
            let arr = list[key];
            arr.push(obj[key]);
        }
    }
    let key = Object.keys(list);
    let thToPrint = '   <tr>'
    for (let b = 0; b < key.length; b++) {
        thToPrint += `<th>${key[b]}</th>`
    }
    thToPrint += '</tr>'
    console.log(thToPrint);

    let value = Object.values(list);

    for (let a = 0; a < value[0].length; a++) {
        let trToPrint = '   <tr>'
        trToPrint += `<td>${value[0][a]}</td>`
        let x = 1
        for (let c = 0; c < value.length-1; c++) {
            trToPrint += `<td>${value[x][a]}</td>`
            x++;
        }
        trToPrint += '</tr>';
        console.log(trToPrint);
    }
    console.log('</table>');
}

// fromJSONToHTMLTable('[{"Name":"Pesho","Score":4,    " Grade":8},{"Name":"Gosho",    "Score":5,    " Grade":8},{"Name":"Angel",    "Score":5.50,    " Grade":10}]');
// fromJSONToHTMLTable('[{"Name":"Stamat",    "Score":5.5}]')
fromJSONToHTMLTable('[{"Name":"Stamat",    "Score":5.5},   {"Name":"Rumen",  "Score":6}]')