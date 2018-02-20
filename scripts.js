const nums = document.getElementsByTagName("td");
const input = document.getElementById("input");
const inputHTML = input.innerHTML;
const enter = document.getElementById("enter");
const c = document.getElementById("clear");
const swap = document.getElementById("swap");
const delFunc = document.getElementById("del");
let flag = false;
let op = "";
let num1 = "";
let num2 = "";

for (var i = 1; i < nums.length; i++) {
  nums[i].onclick = getNum;
  // if (+nums[i].innerHTML >= 0) {
    nums[i].onmouseover = hoverBtn;
    nums[i].onmouseout = hoverBtn2;

}

enter.onclick = equals;
c.onclick = clear;
swap.onclick = swapped;
delFunc.onclick = del;

window.addEventListener('keydown', typeNum);
function typeNum(e) {
    switch (e.keyCode) {
      case 8:
        del();
        break;
      case 13:
        equals();
        break;
      case 16:
        flag = true;
        break;
      case 48:
        input.innerHTML += "0";
        break;
      case 49:
        input.innerHTML += "1";
        break;
      case 50:
        input.innerHTML += "2";
        break;
      case 51:
        input.innerHTML += "3";
        break;
      case 52:
        input.innerHTML += "4";
        break;
      case 53:
        if (flag) {
        input.innerHTML += "%";
        flag = false;
        } else {
        input.innerHTML += "5";
       }
        break;
      case 54:
        input.innerHTML += "6";
        break;
      case 55:
        input.innerHTML += "7";
        break;
      case 56:
        if(flag) {
          input.innerHTML += "*";
          flag = false;
        } else {
          input.innerHTML += "8";
        }
        break;
      case 57:
        input.innerHTML += "9";
        break;
      case 187:
       if(flag) {
         input.innerHTML += "+";
         flag = false;
         break;
       } else {
         equals();
       }
       break;
      case 189:
       input.innerHTML += "-";
       break;
      case 190:
        input.innerHTML += ".";
        break;
      case 191:
       input.innerHTML += "/";
       break;
  }
}

function getNum() {
  input.innerHTML += this.innerHTML;
}

function clear() {
  input.innerHTML = "";
}

function hoverBtn() {
  this.style.backgroundColor='#ffc800';
}

function hoverBtn2() {
  this.style.backgroundColor='#f7de30';
}

function swapped() {
  if (input.innerHTML.indexOf("+") > 0) return;
  if (input.innerHTML.indexOf("-") > 0) return;
  if (input.innerHTML.indexOf("/") > 0) return;
  if (input.innerHTML.indexOf("*") > 0) return;
  if (input.innerHTML.indexOf("%") > 0) return;
  input.innerHTML = times(+input.innerHTML, -1);
}

function add(a , b) {
  return a + b;
}

function sub(a , b) {
  return a - b;
}

function times(a , b) {
  return a * b;
}

function divide(a , b) {
  if (b == 0) return undefined;
  return a / b;
}

function mod(a , b) {
  return a % b;
}

function del() {
  input.innerHTML = input.innerHTML.slice(0, +input.innerHTML.length - 1);
}

function equals() {
  for (let i = 0; i < input.innerHTML.length; i++) {
      if (input.innerHTML.slice(i, i+1) === '+') {
        op = "+";
        num1 = input.innerHTML.slice(0, i);
        num2 = input.innerHTML.slice(i+1);
        break;
      }
      if (input.innerHTML.slice(i, i+1) === '-') {
        op = "-";
        num1 = input.innerHTML.slice(0, i);
        num2 = input.innerHTML.slice(i+1);
        break;
      }
      if (input.innerHTML.slice(i, i+1) === '*') {
        op = "*";
        num1 = input.innerHTML.slice(0, i);
        num2 = input.innerHTML.slice(i+1);
        break;
      }
      if (input.innerHTML.slice(i, i+1) === '/') {
        op = "/";
        num1 = input.innerHTML.slice(0, i);
        num2 = input.innerHTML.slice(i+1);
        break;
      }
      if (input.innerHTML.slice(i, i+1) === '%') {
        op = "%";
        num1 = input.innerHTML.slice(0, i);
        num2 = input.innerHTML.slice(i+1);
        break;
      }
  }
  switch(op) {
   case "+" :
    input.innerHTML = add(+num1, +num2);
    break;
   case "-" :
    input.innerHTML = sub(+num1, +num2);
    break;
   case "*" :
    input.innerHTML = times(+num1, +num2);
    break;
   case "/" :
    input.innerHTML = divide(+num1, +num2);
    break;
   case "%" :
    input.innerHTML = mod(+num1, +num2);
    break;
   default :
    alert('Invalid Operation');
  }
  console.log(num1 + op + num2);
}
