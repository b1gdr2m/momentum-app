const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
    // 여기서 return하게 되면 return한 값을 받게 됨 
    //krAge는 calculateKrAge가 return 한 값을 받게 된다는 뜻. 
    // 이때 return hello 를 해버리면 krAge는 hello가 됨
}

const h1 = document.querySelector(".title");
// getElementsByClassName("something")
// querySelector에서 .은 class, #은 id를 의미함 
document.getElementById


function clickHandlerWCss() {
    h1.classList.toggle("clicked");
    //h1의 class에 clicked가 없으면 넣어주고 있으면 없애주는 기능을 함 
    
}

function clickHandler() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato"
    } else {
        newColor = "blue"
    }
    h1.style.color = newColor
}

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// function btnClick() {
//     const username = loginInput.value;
//     console.log(username);
// }

function onSubmitForm(event) {
    event.preventDefault();
    // form의 기본동작은 submit
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.getItem(USERNAME_KEY);
    paintGreetings(username);
}

function paintGreetings(name) {
    greeting.innerText = `hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting의 hidden class를 지우고 hello를 띄움
}

// loginButton.addEventListener("click", btnClick)

const savedUsername = localStorage.getItem(USERNAME_KEY);
//username이라는 key에 해당하는 값(item)을 가져온 것이 savedUsername

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //loginForm의 hidden class를 지워서 form 을 입력할 수 있게 함
    loginForm.addEventListener("submit", onSubmitForm);
} else {
    paintGreetings(savedUsername);
}
