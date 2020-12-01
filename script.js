/* 1 задание*/
alert(navigator.userAgent);
/*2 задание*/

let name = window.prompt("Введите свое имя");
window.alert("Ваше имя "+ name);
const result = confirm('Вы большой босс?');
if (result) {
document.querySelector('#result').textContent = 'Вы действительно босс!!';
} else {
document.querySelector('#result').textContent = 'Вы совсем не босс((';
}
setTimeout("alert('Прошло 10 секунд')", 10000);