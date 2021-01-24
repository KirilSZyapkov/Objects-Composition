function calorieObject(input){
    let list = {};

    for(let a = 0; a< input.length; a+=2){
        let food = input[a];
        let calory = input[a+1];
        if(!list.hasOwnProperty(food)){
            list[food] = Number(calory);
        }
    }
return list;
}
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));