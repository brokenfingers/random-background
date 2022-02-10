let holder = document.querySelector('.background-holder');
const rectSize = 5;
let cellsInRow = Math.ceil(window.innerWidth / rectSize);
let numberOfRows = Math.ceil(window.innerHeight / rectSize);
let cellColor = randomColor();
let rectArray = [];


fillBackground(rectArray);

function fillBackground(arr) {

    for (let i = rectArray.length; i < cellsInRow * numberOfRows + 1; i++) {
        const newRect = document.createElement('div');
        newRect.style.backgroundColor = `rgb(${cellColor[0]}, ${cellColor[1]}, ${cellColor[2]})`;
        newRect.classList.add('rectangle');
        newRect.addEventListener('mouseleave', mouseGhost);
        holder.appendChild(newRect);
        rectArray.push(newRect);

    }

}

function mouseGhost() {
    this.style.backgroundColor = "#FFF";
}


holder.addEventListener("click", onHolderClick);
window.addEventListener("resize", onResize);
window.addEventListener('keydown', stopColors);


function stopColors(e) {
    if (e.code != 'Escape') return;
    holder.innerHTML = '';
    rectArray = [];
    fillBackground(rectArray);
    cellColor = randomColor();
}


function onResize() {
    cellsInRow = Math.ceil(window.innerWidth / rectSize);
    numberOfRows = Math.ceil(window.innerHeight / rectSize);
    holder.innerHTML = '';
    rectArray = [];
    fillBackground(rectArray);


}


function onHolderClick() {
    holder.innerHTML = '';
    rectArray = [];
    fillBackground(rectArray);
    cellColor = randomColor();
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



function changeColor() {
    setTimeout(() => {
        if (rectArray.length > 0) {
            let randIndex = Math.floor(Math.random() * rectArray.length);
            if (rectArray[randIndex].style.backgroundColor != "#FFF") {
                rectArray[randIndex].style.backgroundColor = `rgb(${cellColor[0]}, ${cellColor[1]}, ${cellColor[2]})`;
            }
            rectArray.splice(randIndex, 1);
            changeColor();
        } else {
            holder.style.backgroundColor = `rgb(${cellColor[0]}, ${cellColor[1]}, ${cellColor[2]})`;
            return;
        }

    }, 4)
}

// changeColor();