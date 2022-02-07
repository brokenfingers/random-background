let holder = document.querySelector('.background-holder');
const rectSize = 10;
const cellsInRow = Math.ceil(holder.clientWidth / rectSize);
const numberOfRows = Math.ceil(holder.clientHeight / rectSize);
let cellColor = randomColor();

for (let i = 0; i < cellsInRow * numberOfRows; i++) {
    const newRect = document.createElement('div');
    newRect.style.backgroundColor = `rgb(${cellColor[0]}, ${cellColor[1]}, ${cellColor[2]})`;
    newRect.classList.add('rectangle');
    holder.appendChild(newRect);
}

holder.addEventListener("click", onHolderClick);


function onHolderClick() {
    cellColor = randomColor();
    rectArray = [];
    rectArray = [...document.querySelectorAll('.rectangle')];
    changeColor();
}

function randomColor() {
    let arr = [];
    arr[0] = Math.floor(Math.random() * 256);
    if (arr[0] < 56) {
        arr[1] = Math.floor(Math.random() * 56) + 200;
        arr[2] = Math.floor(Math.random() * 56) + 200;
    } else if (arr[0] > 200) {
        arr[1] = Math.floor(Math.random() * 56);
        arr[2] = Math.floor(Math.random() * 56);
    } else {
        arr[1] = Math.floor(Math.random() * 200) + 56;
        arr[2] = Math.floor(Math.random() * 200) + 56;
    }


    return arr;
}

let rectArray = [...document.querySelectorAll('.rectangle')];
console.log(rectArray.length);

function changeColor() {
    setTimeout(() => {
        if (rectArray.length > 0) {
            let randIndex = Math.floor(Math.random() * rectArray.length);
            rectArray[randIndex].style.backgroundColor = `rgb(${cellColor[0]}, ${cellColor[1]}, ${cellColor[2]})`;
            rectArray.splice(randIndex, 1);
            changeColor();
        } else {
            holder.style.backgroundColor = `rgb(${cellColor[0]}, ${cellColor[1]}, ${cellColor[2]})`;
            return;
        }

    }, 4)
}

changeColor();