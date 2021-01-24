function constructionCrew(input) {
    let worker = input;
    let state = worker.dizziness;
    if (state) {
        let water = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += Number(water);
        worker.dizziness = false;
    }
return worker;
}

console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));