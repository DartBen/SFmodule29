let userInfo=new Map();
let UserAgent = window.navigator.userAgent;
userInfo.set('UserAgent', UserAgent);
age = prompt("Введите свой возраст.", "");
if (age >= 18) { alert("Приветствуем на LifeSpot! " + new Date().toLocaleString()); }
else {
    alert("Данный сайт не предназначен для лиц младше 18 лет!");
    window.location.href = "http://www.google.com";
};
userInfo.set('Age', age);
let timeOfSesionStart = new Date().toLocaleString()
userInfo.set('TimeOfSesionStart',timeOfSesionStart);

// Вывод в консоль
for (let result of userInfo){
    console.log(result)
}
//возраст, время начала сессии, строку User Agent

