const packages = [ 
    { id: 101, weight: 2.5 }, 
    { id: 102, weight: 8.0 }, 
    { id: 103, weight: 1.2 }, 
    { id: 104, weight: 12.5 } 
];

calculateShipping = (weight) => {
    if (weight <= 5){
        return 5;
    } else if (weight <= 10){
        return 10;
    } else if (weight > 10){
        return 15;
    }
};

for (let package of packages){
    let cost  = calculateShipping(package.weight);
    console.log(`package ${package.id}: $${cost.toFixed(2)}`);
};