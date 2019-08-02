const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');

const block = document.querySelector('#block');
const reset = document.querySelector('#reset');

var pos = 0;

btnRight.onclick = function goLeft() {
    var idRight = setTimeout(goLeft, 10);
    if (pos === 300) {
        clearInterval(idRight);
    } else {
        pos++;
        block.style.left = pos + 'px';
    }
    console.log(idRight);
}

btnLeft.onclick = function goRight() {
    var idLeft = setTimeout(goRight, 10);
    if (pos === -300) {
        clearInterval(idLeft);
    } else {
        pos--;
        block.style.left = pos + 'px';
    }
    console.log(idLeft);
}

btnUp.onclick = function goUp() {
    var idUp = setTimeout(goUp, 10);
    if (pos === -300) {
        clearInterval(idUp);
    } else {
        pos--;
        block.style.top = pos + 'px';
    }
    console.log(idUp);
}

btnDown.onclick = function goDown() {
    var idDown = setTimeout(goDown, 10);
    if (pos === 300) {
        clearInterval(idDown);
    } else {
        pos++;
        block.style.top = pos + 'px';
    }
    console.log(idDown);
}

reset.onclick = function() {
    block.style = 0;
    pos = 0; 
    console.log(pos)
}