const brush = document.querySelector('.current-brush')
const classes = brush.classList;
// classes.replace('color-2', 'color-3')

// let currentColor = 
document.querySelector('.color-1').addEventListener('click', changeBrush)
function changeBrush() {
    classes.replace(classes[1] , 'color-1')
}

document.querySelector('.color-2').addEventListener('click', changeBrush1)
function changeBrush1() {
    
    classes.replace(classes[1], 'color-2')
}


document.querySelector('.color-3').addEventListener('click', changeBrush2)
function changeBrush2() {
    
    classes.replace(classes[1], 'color-3')
}
document.querySelector('.color-4').addEventListener('click', changeBrush3)
function changeBrush3() {
    
    classes.replace(classes[1], 'color-4')
}

document.querySelector('.color-5').addEventListener('click', changeBrush4)
function changeBrush4() {
    
    classes.replace(classes[1], 'color-5')
}
// const square = document.querySelector('.square')
// const classesSquare = square.classList;


const allSquares = document.querySelectorAll('.square')
// const squareClass =allSquares.classList
let newSquares = Array.from(allSquares)
const squareClass =newSquares.classList

for (let i = 0; i < newSquares.length; i++) {
    newSquares[i].addEventListener("click", function(event) {
        newSquares[i].classList.replace(squareClass[1], classes[1])
        // event.target.classList.replace(classesSquare[1], classes[1]);
    })
    }
//     newSquares[i].classList.replace(classesSquare[1], classes[1])
//     }
// }
// for (const squares of allSquares) {
//     square.addEventListener('click', squarePaint)
// }
// function squarePaint () {
//     classesSquare.replace(classesSquare[1], classes[1])


// }
//     if (event.target.('.square')){
//     classesSquare.replace(classesSquare[1], classes[1])
//     button.addEventListener('click', function(event) 
//     }
// }

// var deleteLinks = document.querySelectorAll('.delete');

// Array.from(deleteLinks)





// const heyYo = document.querySelector('#hey-yo');
// const classes = heyYo.classList;



// classes.replace('classy', 'some-better-name')

// classes.toggle('classy-class')
// classes.toggle('classy-class')

// console.log(classes)