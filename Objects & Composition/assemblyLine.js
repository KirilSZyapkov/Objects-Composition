function createAssemblyLine() {

    function hasClima(obj) {
        let car = obj;
        car.temp = 21;
        car.tempSettings = 21;
        car.adjustTemp = () => {
            if (car.temp < car.tempSettings) {
                car.temp++;
            } else if (car.temp > car.tempSettings) {
                car.temp--;
            }
        }

    }

    function hasAudio(obj) {
        let car = obj;
        car.currentTrack = {'name': '', 'artist': ''};
        if (car.currentTrack !== null) {
            car.nowPlaying = () => {
                console.log(`Now playing ${car.currentTrack.name}' by ${car.currentTrack.artist}`);
            }
        }
    }

    function hasParktronic(obj) {
        let car = obj;
        car.checkDistance = (arg) => {
            let distance = Number(arg);
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log("Beep!");
            } else {
                console.log();
            }


        }
    }

    return {
        hasClima,
        hasAudio,
        hasParktronic
    };

}

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
const assemblyLine = createAssemblyLine();
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);