const calculation = () => {
    let max = 1001
    let min = 1
    let number = null
    let mapRandom = new Map();
    let repetitions = null;
    let quantity = +process.argv[2];
    for (let i = 0; i < quantity; i++) {
        number = Math.floor(Math.random() * (max - min)) + min;
        console.log(number);
        repetitions = mapRandom.get(number)
        if (repetitions) {
            mapRandom.set(number, ++repetitions)
        } else {
            mapRandom.set(number, 1) 
        }  
    }
    const result = Array.from(mapRandom, ([number, repetition]) => ({ number, repetition }));
    process.send(result);
    console.log(result);
}

calculation();