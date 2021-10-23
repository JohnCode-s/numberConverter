const numInput = document.querySelector('.text');
const inputWrapper = document.querySelector('#text');
const from = document.querySelector('.from');
const message = document.querySelector('.message');
const start = document.querySelector('#start');
const binarys = document.querySelector('#binarys');
const octals = document.querySelector('#octals');
const decimals = document.querySelector('#decimals');
const hexadecimals = document.querySelector('#hexadecimals');

let binary = [0, 1];
let octal = [0, 1, 2, 3, 4, 5, 6, 7];
let decimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
document.addEventListener("DOMContentLoaded", () => {
    inputWrapper.style.visibility = 'hidden';
    start.style.visibility = 'hidden';
    message.style.visibility = 'hidden';
});

from.addEventListener("change", () => {
    let chosenValue = from.value;
    switch (chosenValue) {
        case '2':
            runBinary();
            break;
        case '8':
            runOctal();
            break;
        case '10':
            runDecimal();
            break;
        case '16':
            runHexadecimal();
            break;
    
        default:
            break;
    }
});

function checkArray(val, arr) {
    if (!arr.includes(val)) {
        message.style.visibility = 'visible';
            message.textContent = `Enter only ${arr.join(',')}`;
            numInput.value = '';
            setTimeout(function () {
            message.style.visibility = 'hidden';
        }, 3000);
        }
}
    
function checkHexArray(val, arr1, arr2) {
    if (!arr1.includes(parseInt(val)) && !arr2.includes(val.toUpperCase())) {
        message.style.visibility = 'visible';
        message.textContent = `Enter only ${arr1.concat(arr2)}`;
        numInput.value = '';
        setTimeout(function () {
            message.style.visibility = 'hidden';
        }, 3000);
        }
    }

function runBinary() {
    inputWrapper.style.visibility = 'visible';
    start.style.visibility = 'visible';
    let values = '';
        numInput.addEventListener('input', () => {
        values = numInput.value;
        let nums = values.split('');
        nums.forEach((num) => checkArray(parseInt(num), binary));
    });
    start.addEventListener('click', () => {
        let bin = values;
        let oct = convertFromBaseToBase(values, 2, 8);
        let dec = convertFromBaseToBase(values, 2, 10);
        let hex = convertFromBaseToBase(values, 2, 16).toUpperCase();
        binarys.value = bin;
        octals.value = oct;
        decimals.value = dec;
        hexadecimals.value = hex;
    });
}

function runOctal() {
    inputWrapper.style.visibility = 'visible';
    start.style.visibility = 'visible';
    let values = '';
    numInput.addEventListener('input', () => {
        values = numInput.value;
        let nums = values.split('');
        nums.forEach((num) => checkArray(parseInt(num), octal));
    });
    start.addEventListener('click', () => {
        let oct = values;
        let bin = convertFromBaseToBase(values, 8, 2);
        let dec = convertFromBaseToBase(values, 8, 10);
        let hex = convertFromBaseToBase(values, 8, 16).toUpperCase();
        binarys.value = bin;
        octals.value = oct;
        decimals.value = dec;
        hexadecimals.value = hex;
    });
}

function runDecimal() {
    inputWrapper.style.visibility = 'visible';
    start.style.visibility = 'visible';
    let values = '';
    numInput.addEventListener('input', () => {
        values = numInput.value;
        let nums = values.split('');
        nums.forEach((num) => checkArray(parseInt(num),decimal))
    });
    start.addEventListener('click', (e) => {
        let dec = values;
        let oct = convertFromBaseToBase(values, 10, 8);
        let bin = convertFromBaseToBase(values, 10, 2);
        let hex = convertFromBaseToBase(values, 10, 16).toUpperCase();
        binarys.value = bin;
        octals.value = oct;
        decimals.value = dec;
        hexadecimals.value = hex;
    });
}

function runHexadecimal() {
    inputWrapper.style.visibility = 'visible';
    start.style.visibility = 'visible';
    let values = '';
    numInput.addEventListener('input', () => {
        values = numInput.value.toUpperCase();
        let nums = values.split('');
        let newArrayNum = filterHexNum();
        let newArrayAlpha = filterHexAlpha();
        //console.log(newArrayNum.concat(newArrayAlpha));
        nums.forEach(function (num) {
            checkHexArray(num, newArrayNum,newArrayAlpha);
        });
    });
    start.addEventListener('click', (e) => {
        let hex = values;
        let oct = convertFromBaseToBase(values, 16, 8);
        let dec = convertFromBaseToBase(values, 16, 10);
        let bin = convertFromBaseToBase(values, 16, 2).toUpperCase();
        binarys.value = bin;
        octals.value = oct;
        decimals.value = dec;
        hexadecimals.value = hex;
    });
}

function filterHexNum() {
    let onlyNum = (val) => {
            if (typeof(val) == 'number') {
                return val;
            }
        } 
    let hexNum = hexadecimal.filter(onlyNum);
    return hexNum;
}

function filterHexAlpha() {
      let onlyAlpha = (val) => {
            if (typeof(val) != 'number') {
                return val;
            }
        } 
    let hexAlpha = hexadecimal.filter(onlyAlpha);
    return hexAlpha;
}

function convertFromBaseToBase(str, from, to) {
    let num = parseInt(str, from);
    return num.toString(to);
}