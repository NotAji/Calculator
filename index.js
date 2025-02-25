let answer = document.getElementById("answer");

let clear = document.getElementById("clear");
let division = document.getElementById("divide");
let multiply = document.getElementById("times");
let plus = document.getElementById("plus");
let substract = document.getElementById("minus");
let equals = document.getElementById("equals");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let num = '';
let operation = '';
let arr = [];

one.addEventListener('click', () => {
    num = `1`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
});
two.addEventListener('click', () => {
    num = `2`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
});
three.addEventListener('click', () => {
    num = `3`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
});
four.addEventListener('click', () => {
    num = `4`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
})
five.addEventListener('click', () => {
    num = `5`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
});
six.addEventListener('click', () => {
    num = `6`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
});
seven.addEventListener('click', () => {
    num = `7`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
});
eight.addEventListener('click', () => {
    num = `8`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
});
nine.addEventListener('click', () => {
    num = `9`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
});
zero.addEventListener('click', () => {
    num = `0`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
})
dot.addEventListener('click', () => {
    num = `.`;
    arr.push(num);
    let newArr = arr.join("");
    answer.textContent = newArr;
})
retry();
plus.addEventListener('click', () => {
    operation = `+`;
    arr.push(`+`);
    newArr = arr.join("")
    answer.textContent = newArr;
});
substract.addEventListener('click', () => {
    operation = `-`;
    arr.push(`-`);
    newArr = arr.join("")
    answer.textContent = newArr;
});
multiply.addEventListener('click', () => {
    operation = `x`;
    arr.push(`*`);
    newArr = arr.join("")
    answer.textContent = newArr;
});
division.addEventListener('click', () => {
    operation = `/`;
    arr.push(`/`);
    newArr = arr.join("")
    answer.textContent = newArr;
});
equals.addEventListener('click', () => {
    operate();
    retry();
});
function operate(){
    let result;

    switch(operation){
        case `+`:
            newArr = arr.join("");
            result = eval(newArr);
            answer.textContent = result;
            break;

        case `-`:
            newArr = arr.join("");
            result = eval(newArr);
            answer.textContent = result;
            break;

        case `x`:
            newArr = arr.join("");
            result = eval(newArr);
            answer.textContent = result;
            break;

        case `/`:
            newArr = arr.join("");
            result = eval(newArr);
            answer.textContent = result;
            break;
    }
}
function retry(){
    clear.addEventListener('click', () => {
        arr = [];
        num = "";
        answer.textContent = "";
        operation = "";
    })
}
