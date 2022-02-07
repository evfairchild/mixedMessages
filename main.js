    let fs = require('fs');
    let jokes = fs.readFileSync('jokes.txt').toString('utf-8').split("\n");

    getRandomJoke = () => {
        return jokes[Math.floor(Math.random()*jokes.length)]
    }
    
    console.log(getRandomJoke())