function cityTaxes(arg1, arg2, arg3) {

    let city = {
        name: arg1,
        population: arg2,
        treasury: arg3,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRate
        },

        applyGrowth: function (percentage) {
            Math.floor(this.population *= ((100 + percentage) / 100));
        },

        applyRecession(percentage) {
            Math.ceil(this.treasury *= ((100 - percentage) / 100));
        }
    }
    return city
}

const result = cityTaxes('Tortuga', 7000, 15000);
console.log(result);

result.collectTaxes();
console.log(result.treasury);