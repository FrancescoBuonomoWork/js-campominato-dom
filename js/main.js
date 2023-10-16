// console.log("funziona");

const playButtonDOMElement = document.getElementById("btn-play");
// console.log(playButtonDOMElement);

const selectDOMElement = document.getElementById("difficolta");
console.log(selectDOMElement.value);

// for(i = 0 ;i < selectDOMElement.length; i++ ){
//     const selectOptionDOMElement = selectDOMElement[i];
//     console.log(selectOptionDOMElement);

// }
let countDOMElement = document.getElementById("count");
console.log(countDOMElement);

let score = 0;

let bombs = [];

playButtonDOMElement.addEventListener("click", function () {


    // bombs = getArrayOfNumbersBetween(1, 100, 16);
    // console.log(bombs);
    // if (bombs === cellDOMElements ) {

    // }
    // resettiamo la griglia 
    // gridDOMElement.innerHTML = "";
    if (selectDOMElement.value === "facile") {
        createGridElements(100);
        bombs = getArrayOfNumbersBetween(1,100,16);
        console.log(bombs);



    } else if (selectDOMElement.value === "normale") {
        createGridElements(9 * 9, "cell-normale");
        bombs = getArrayOfNumbersBetween(1,(9 * 9),16);
        console.log(bombs);
    } else if (selectDOMElement.value === "difficile") {
        createGridElements(7 * 7, "cell-difficile");
        bombs = getArrayOfNumbersBetween(1,(7 * 7),16);
        console.log(bombs);
    }

    const cellDOMElements = document.querySelectorAll(".cell");
    // console.log(cellDOMElements);
    // console.log(cellDOMElements.length);
    for (i = 0; i < cellDOMElements.length; i++) {
        const currentCellDOMElement = cellDOMElements[i];
        // console.log(currentCellDOMElement);

        
        currentCellDOMElement.addEventListener("click", function (event) {

            // currentCellDOMElement.classList.add("bg-lightblue");
            
            const targetCell = event.target;
            // console.log(targetCell);
            const targetNumber = parseInt(targetCell.innerHTML);
            // console.log(bombs.includes(targetNumber));
            // console.log(targetNumber , bombs.includes());
            if (bombs.includes(targetNumber) === true)  {
                // currentCellDOMElement.classList.add("bg-red");
                targetCell.classList.add("bg-red");
                // console-log("hai perso");

    
                
            } else {
                // currentCellDOMElement.classList.add("bg-lightblue");
                targetCell.classList.add("bg-lightblue");
                // targetCell.classList.add("bg-red");
                score = score + 1;
                countDOMElement.innerHTML = score;
            
            }
            console.log(bombs.includes(targetNumber));         
        })
        
    }


})


function getArrayOfNumbersBetween(rangeMin, rangeMax, number) {
    const bombsArray = [];
    while (bombsArray.length < number) {
        const n = getRandomInt(rangeMin, rangeMax);
        // console.log(bombsArray.includes(n));
        if (bombsArray.includes(n) === false)
            bombsArray.push(n);
    }
    return bombsArray;
    // console.log(bombsArray);
}

// funzione per generare numeri random 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
}
// funzione per creare gli elementi della griglia 
function createGridElements(cellsNumber, rowCell = "") {
    const gridDOMElement = document.querySelector(".grid");
    // console.log(gridDOMElement);
    gridDOMElement.innerHTML = "";
    for (let i = 0; i < cellsNumber; i++) {
        // console.log(i);
        const n = i + 1;
        // console.log(n);
        const cellHTML = `<div class="cell ${rowCell}">${n}</div>`;
        // console.log(cellHTML);
        gridDOMElement.innerHTML += cellHTML;
        // console.log(cellHTML);
    }
}