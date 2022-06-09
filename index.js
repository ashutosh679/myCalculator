let display = document.getElementById('display');
let history = document.getElementById('history');
let extra = document.getElementById('extra');
let trigos = document.getElementById('trigos');
let trigoes = document.getElementById('trigoes');
let trigose = document.getElementById('trigose');
let sin1 = document.getElementById('sin1');
let cos1 = document.getElementById('cos1');
let tan1 = document.getElementById('tan1');
buttons = document.querySelectorAll('button');
let screenValue = '';
let angle = '';
let number = '';
/*let screenArray = '';*/

/*TRIGNOMETRIC FUNCTIONS*/
function sine() {
    display.value = Math.sin(angle * Math.PI / 180);
    history.value = 'sin' + '(' + angle + ')';
    angle = '';
}
function sineInverse() {
    display.value = (Math.asin(angle)) * 180 / Math.PI;
    history.value = 'arsin' + '(' + angle + ')';
    angle = '';
}
function cosine() {
    number = Math.cos(angle * Math.PI / 180);
    display.value = Math.round(number);
    history.value = 'cos' + '(' + angle + ')';
    angle = ''; number = '';
}
function cosineInverse() {
    display.value = (Math.acos(angle)) * 180 / Math.PI;
    history.value = 'arcos' + '(' + angle + ')';
    angle = '';
}
function tangent() {
    let a = Math.sin(angle * Math.PI / 180);
    let b = Math.cos(angle * Math.PI / 180);
    number = a / Math.round(b);
    display.value = number;
    history.value = 'tan' + '(' + angle + ')';
    angle = ''; number = '';
}
function tangentInverse() {
    let a = (Math.asin(angle)) * 180 / Math.PI;
    let b = (Math.acos(angle)) * 180 / Math.PI;
    number = a / Math.round(b);
    display.value = number;
    history.value = 'artan' + '(' + angle + ')';
    angle = ''; number = '';
}

/*FACTORIAL FUNCTION*/
function factorial(screenValue) {
    if (screenValue == '0') {
        return 1;
    } else {
        return screenValue * factorial(screenValue - 1);
    }
}

/*function transition() {
    if (extra.style.height == 'auto') {
        return extra.style.height = 0;
    } else {
        return extra.style.height = 'auto';
    }
}*/

function change() {
    if (trigos.style.display == 'inline-block') {
        return trigos.style.display = 'none';
    } else {
        return trigos.style.display = 'inline-block';
    }
    
}

function change1() {
    if (trigose.style.display == 'inline-block') {
        return trigose.style.display = 'none';
    } else {
        return trigose.style.display = 'inline-block';
    }
}

function change2() {
    if (trigoes.style.display == 'inline-block') {
        return trigoes.style.display = 'none';
    } else {
        return trigoes.style.display = 'inline-block';
    }
}
function change3() {
    if (sin1.style.display == 'none') {
        return sin1.style.display = 'inline-block';
    } else {
        return sin1.style.display = 'none';
    }
}
function change4() {
    if (cos1.style.display == 'none') {
        return cos1.style.display = 'inline-block';
    } else {
        return cos1.style.display = 'none';
    }
}
function change5() {
    if (tan1.style.display == 'none') {
        return tan1.style.display = 'inline-block';
    } else {
        return tan1.style.display = 'none';
    }
}
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'C') {
            /*screenArray = screenValue.split('');
            screenArray.pop();
            screenValue = screenArray.join('');*/
            screenValue = screenValue.slice(0, -1);
            display.value = screenValue;
        } else if ((buttonText == 'x' || buttonText == '+' || buttonText == '-' || buttonText == '%' || buttonText == '/') && screenValue == '') {
            display.value = '';
        } else if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            display.value = screenValue;
        } else if (buttonText == 'AC') {
            screenValue = '';
            angle = '';
            display.value = screenValue;
            history.value = screenValue;
        } else if (buttonText == '=') {
            history.value = screenValue;
            display.value = eval(screenValue);
            screenValue = '';
        } else if (buttonText == '!') {
            display.value = factorial(screenValue);
            history.value = screenValue + '!';
        } /*else if (buttonText == '00') {
            trigos.style.display = 'none';
            trigose.style.display = 'none';
            trigoes.style.display = 'none';
            transition();
        }*/ else if (buttonText == '2nd') {
            console.log('clicked')
            change();
            change1();
            change2();
            change3();
            change4();
            change5();
        } else {
            angle += buttonText;
            screenValue += buttonText;
            display.value = screenValue;
        }
    })
}
