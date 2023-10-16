// console.log("funziona");

const playButtonDOMElement = document.getElementById("btn-play");
// console.log(playButtonDOMElement);

const selectDOMElement = document.getElementById("difficolta");
console.log(selectDOMElement.value);

// for(i = 0 ;i < selectDOMElement.length; i++ ){
//     const selectOptionDOMElement = selectDOMElement[i];
//     console.log(selectOptionDOMElement);

// }


playButtonDOMElement.addEventListener("click", function () {
    
    
    
    // resettiamo la griglia 
    // gridDOMElement.innerHTML = "";
    if (selectDOMElement.value === "facile") {
        createGridElements(100);
        const bombs = getArrayOfNumbersBetween(1,100,16);
        console.log(bombs);
    } else if (selectDOMElement.value === "normale") {
        createGridElements(9 * 9, "cell-normale");
    } else if (selectDOMElement.value === "difficile") {
        createGridElements(7 * 7, "cell-difficile");
    }


    const cellDOMElements = document.querySelectorAll(".cell");
    // console.log(cellDOMElements);
    // console.log(cellDOMElements.length);
    for (i = 0; i < cellDOMElements.length; i++) {
        const currentCellDOMElement = cellDOMElements[i];
        // console.log(currentCellDOMElement);

        currentCellDOMElement.addEventListener("click", function () {
            currentCellDOMElement.classList.add("bg-lightblue");
            console.log(currentCellDOMElement);


        })
    }
})

function getArrayOfNumbersBetween(rangeMin, rangeMax, number) {
    const bombsArray = [];
    while (bombsArray.length < number) {
        const n = getRandomInt(rangeMin, rangeMax);
        // console.log(bombsArray.includes(n));
    if(bombsArray.includes(n) === false)    
        bombsArray.push(n);
    }
    console.log(bombsArray);
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