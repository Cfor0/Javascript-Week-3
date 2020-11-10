


const cutPizzaSlices = a => `Each person gets ${Math.round((8/a) * 100) / 100} slices of pizza`;

// let sharePizza = cutPizzaSlices(3);

console.log(cutPizzaSlices(2))
console.log(cutPizzaSlices(3))