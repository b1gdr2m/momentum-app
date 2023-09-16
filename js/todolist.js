const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = []; //const일 때는 변경할 수 없지만 let은 변경할 수 있음

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    //todos가 key값이고 toDos가 newtodo로부터 추가된 텍스트값이 value가 된다는 뜻
}

function deleteToDo(event) { //어느 li에 위치한 버튼인지 이 함수에서 구별되어야 함 
    //console에서 button의 path를 클릭하면 어떤 li인지 알 수 있음 
    //즉 발생한 event의 target은 event.target을 통해 그 property를 볼 수 있음
    //target.parentNode or parentElement를 하면 어디에 속해있는지 확인할 수 있는 것임 
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text; //이제 newToDo라는 object의 text라고 적어야 함 
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);  

    li.appendChild(span); //span을 li안으로 포함되게 해줌
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello(item) { 
    //click이라고 안써도 event라고 쓰면 자동으로 해주는 것처럼 어떤 item인지도 자바스크립트가 제공해줌
//  console.log("this is the turn of",item);
//}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos)
    toDos = parsedToDos; //localstorage에 저장된 값까지 추가할 수 있음 
    parsedToDos.forEach(paintToDo); 
//forEach는 각 item별로 이 함수를 실행하게 해줌
// forEach((item)=>~~~~~~~);는 함수없이 item별로 뭔가를 실행하게 해줌
}

