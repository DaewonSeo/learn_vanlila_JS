
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_NM = 'currentUserName',
    SHOWING_CN = 'showing';


function saveName(text){
    localStorage.setItem(USER_NM, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}

function addForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintName(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const curretUser = localStorage.getItem(USER_NM);
    if(curretUser === null){
        addForName();
    } else{
        paintName(curretUser);
    }
}

function init() {
    loadName();
}

init();