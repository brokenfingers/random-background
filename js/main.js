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