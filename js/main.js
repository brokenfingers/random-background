let holder = document.querySelector('.background-holder');
const holderWidth = Math.ceil(holder.clientWidth / 10) * 10;
const holderHeigth = Math.ceil(holder.clientHeight / 10);
const rectSize = 10;
let color = randomColor();

for (let i = 0; i < holderWidth * holderHeigth; i += 10) {
    const newRect = document.createElement('div');
    newRect.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    newRect.classList.add('rectangle');
    holder.appendChild(newRect);
}

holder.addEventListener("click", onHolderClick);


function onHolderClick() {
    color = randomColor();
    rectArray = [];
    rectArray = [...document.querySelectorAll('.rectangle')];
    changeColor();
}

function randomColor() {
    let arr = [];
    arr[0] = Math.floor(Math.random() * 256);
    arr[1] = Math.floor(Math.random() * 256);
    arr[2] = Math.floor(Math.random() * 256);
    return arr;
}

let rectArray = [...document.querySelectorAll('.rectangle')];
console.log(rectArray.length);

function changeColor() {
    setTimeout(() => {
        if (rectArray.length > 0) {
            let randIndex = Math.floor(Math.random() * rectArray.length);
            rectArray[randIndex].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            rectArray.splice(randIndex, 1);
            changeColor();
        }
    }, 4)
}

changeColor();