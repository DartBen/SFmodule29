﻿//функция фильтрации контента
function sessionInfo() {
    let userInfo = new Map();
    let UserAgent = window.navigator.userAgent;
    userInfo.set('UserAgent', UserAgent);
    age = prompt("Введите свой возраст.", "");
    if (age >= 18) {
        alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
    } else {
        alert("Данный сайт не предназначен для лиц младше 18 лет!");
        window.location.href = "http://www.google.com";
    }
    ;
    userInfo.set('Age', age);
    let timeOfSesionStart = new Date().toLocaleString()
    userInfo.set('TimeOfSesionStart', timeOfSesionStart);

// Вывод в консоль
    for (let result of userInfo) {
        console.log(result)
    }
}

let session =  new Map();
function handleSession(){
    session.set("userAgent", window.navigator.userAgent);
    session.set("startDate", new Date().toLocaleString());
    //session.set("age", checkAge());
}
function checkAge(){
    let age = prompt("Пожалуйста, введите ваш возраст?");
    if (age >= 18) {
        let startDate = new Date().toLocaleString();
        alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + startDate );
    }
    else{
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. ВыL будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
    return age;
}
function sessionLog(){
    for (let result of session){
        console.log(result)
    }
}

function printSession (session) {
    for (let result of session){
        console.log(result)
    }
}

//функция фильтрации контента
function filtarionContent(UserInput) {
    let elements = UserInput;
    let element = elements[0];
    let text = element.value;
    let videoElements = document.getElementsByClassName('video-container');
    for (let i=0; i < videoElements.length; i++) {
        let videoElement = videoElements[i];
        let videoElementName = videoElement.getElementsByTagName('h3')[0].innerText;
        let videoElementNameLowerCase = videoElementName.toLowerCase();
        if (!videoElementNameLowerCase.includes(text.toLowerCase())){videoElements[i].style.display = 'none';}
        else {videoElements[i].style.display = 'inline-block'; }
    }
}
//функция фильтрации контента с вводом аргумента другой функцией
function filtarionContentByInputFunction() {
    let element = UserInputFunction();
    let text = element.value;
    let videoElements = document.getElementsByClassName('video-container');
    for (let i=0; i < videoElements.length; i++) {
        let videoElement = videoElements[i];
        let videoElementName = videoElement.getElementsByTagName('h3')[0].innerText;
        let videoElementNameLowerCase = videoElementName.toLowerCase();
        if (!videoElementNameLowerCase.includes(text.toLowerCase())){videoElements[i].style.display = 'none';}
       else {videoElements[i].style.display = 'inline-block'; }
    }
}
let UserInputFunction = function UserInputFunction(){
    return document.getElementsByTagName('input')[0];
}

function instagramSubscribe() {
    alert("Подпишитесь на наш Инстаграмм (запрещенно на территории РФ и вообще не по православному)")
}



