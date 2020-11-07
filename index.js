const bookCollection = [
    { isbn: 23453, author: "J. Simmons", pages: 250, title: "The Dark", read: true },
    { isbn: 56456, author: "Peter Black", pages: 120, title: "Feed", read: false },
    { isbn: 43243, author: ["A. Smith", "F. Gant"], pages: 340, title: "Fire", read: true },
    { isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true },
    { isbn: 89232, author: "Anna Willis", pages: 610, title: "The Run", read: false },
];

// hasId Function 

const myObject = [{
    id: 1,
    name: "Miguel",
    surname: "Cobo",
}, {
    id: 2,
    name: "Javier",
    surname: "Ibarra",
}];

const hasId = myObjects => myObjects.some(user => user.id);
console.log(hasId(myObject));

//  head Function

const myArray = ["firstElement", "SecondElement", "ThirdElement"];

const head = ([first]) => first;
console.log(head(myArray));

//  Tail Function

const mySecondArray = [1, 2, 3, 4];
const tail = (mySecondArray) => {
    const [firstItem, ...restItems] = mySecondArray;
    return restItems;
};

console.log(tail(mySecondArray));

//  swapFirstToLast Function

const swapFirstToLast = (mySecondArray) => {
    const [firstItem, ...restItems] = mySecondArray;
    console.log([...restItems, firstItem]);
};

swapFirstToLast(mySecondArray);

//  excludeId Function
const mySecondObject = [{
    id: 1,
    name: "Miguel",
    age: 28,
}];

const excludeId = mySecondObject => {
    const [{ id, ...rest }] = mySecondObject;
    console.log({ rest });
}
excludeId(mySecondObject);

//  wordsStartingWithA Function
const wordsArray = ["Azul", "Rojo", "Verde", "Amarillo", "Azufre", "Mercurio"];

const wordsStartingWithA = (letter, wordsArray) =>
    wordsArray.map(word => {
        if (word.charAt(0) === letter) return { word };
    });

console.log(wordsStartingWithA("A", wordsArray));

//  concat Function

const concat = wordsArray => {
    if (wordsArray.every(word => typeof word == 'string')) console.log(wordsArray.join(" | "));
};
concat(wordsArray);

//  multArray Function

const multArray = (x, arr) => arr.map(arr => arr * x); //multiplica por x cada elemento del array
console.log(mySecondArray); // Se imprime el array original como muestra
console.log(multArray(2, mySecondArray)); //Se imprime el resultado de multArray

//  calcMult Function

const calcMult = (...myNumbers) => myNumbers.reduce((result, myNumbers) => {
    result = myNumbers * myNumbers;
    return result;
});

console.log(calcMult(1, 4, 7));