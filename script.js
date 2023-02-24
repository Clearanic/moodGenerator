//This is a Mood Generator

//generate random number
const getRandom = (num) => {
    return Math.floor(Math.random() * num);
    
};

console.log(getRandom(5))

//Array
const moodArray = [
    color = ['Red','Blue','Green','Yellow','Orange','Violet'],
    mood = ['Happy','Sad','Shy','Confused','Confident'],
    shape = ['Circle','Square','Triangle','Trapizod','Star']

];

const finalResult = [];

for(const item in moodArray){
    const x = getRandom(moodArray[item].length)
    console.log(x)
}

switch (moodArray) {
    case 'color':
        return `Your color is ${getRandom([item][x])}`
}




