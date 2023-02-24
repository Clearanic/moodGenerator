//This is a Mood Generator

//generate random number
const getRandom = (num) => {
    return Math.floor(Math.random() * num);
    
};


//Array
const moodArray = {
    color: ['Red','Blue','Green','Yellow','Orange','Violet'],
    mood: ['Happy','Sad','Shy','Confused','Confident'],
    shape: ['Circle','Square','Triangle','Trapizod','Star']

};

let finalResult = [];

for(let item in moodArray) {
    let x = getRandom(moodArray[item].length)

switch (item) {
    case 'color':
        finalResult.push(`Your color is ${moodArray[item][x]}`)
        break;
    case 'mood':
        finalResult.push(`Your mood is ${moodArray[item][x]}`)
        break;
    case 'shape':
        finalResult.push(`Your shape is ${moodArray[item][x]}`)
        break;
    default:
        return null
    }
}




const joinResult = (result) =>{
    const y = finalResult.join('\n');
    console.log(y)
}

joinResult(finalResult);
