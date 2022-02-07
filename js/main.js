const holder = document.querySelector('.background-holder');
const holderWidth = Math.ceil(holder.clientWidth / 10) * 10;
const holderHeigth = holder.clientHeight;
const rectSize = 10;

for (let i = 0; i < holderWidth * 20; i += 10) {
    const newRect = document.createElement('div');
    newRect.setAttribute('id', i);
    newRect.classList.add('rectangle');
    holder.appendChild(newRect);
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

const rectArray = [...document.querySelectorAll('.rectangle')];


function changeColor() {
    setTimeout(() => {
        if (rectArray.length > 0) {
            let randIndex = Math.floor(Math.random() * rectArray.length);
            rectArray[randIndex].style.backgroundColor = "red";
            rectArray.splice(randIndex, 1);
            changeColor();
        }
    }, 0.2)
}

changeColor();