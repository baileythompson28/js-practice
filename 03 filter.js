const vowals = ["a", "e", "i", "o", "u"];

const words = [ 
    "Apple", "Banana", "orange", "Grape", "Elephant", 
    "umbrella", "Tiger", "Ice", "computer", "Octopus" 
];

function findVowal(element){
    return vowals.includes(element[0].toLowerCase());
}

const wordsWithVowals = words.filter(findVowal);
console.log(wordsWithVowals);
