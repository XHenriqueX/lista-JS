const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const objUnido = { ...obj1, ...obj2 };

console.log(objUnido);  // Saída: { a: 1, b: 3, c: 4 }
