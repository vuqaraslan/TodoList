// let clickBtn=document.getElementById('clickBtn');
// clickBtn.addEventListener('click',function(){
//     console.log(this);
//     console.log("Hello");
// });

// let mydiv=document.getElementById('mydiv');
// mydiv.addEventListener('contextmenu',function(e){
// e.preventDefault();
// console.log(this);
// });

// let clickBtn=document.getElementById('clickBtn');
// // clickBtn.addEventListener('click',()=>{
// //     console.log(this);
// //     console.log("Hello");
// // });
// clickBtn.onclick=()=>{
//     alert("Button clicked !");
// }

// let mydiv=document.getElementById('mydiv');

// mydiv.addEventListener('contextmenu',(e)=>{
// e.preventDefault();
// console.log(this);
// });

// mydiv.addEventListener('mousedown',()=>{
//     console.log('mousedown working !');
// });
// mydiv.addEventListener('mouseup',()=>{
//     console.log('mouseup working !');
// });

// let pText=document.querySelector('.text');
// console.log(pText);

// window.addEventListener("DOMContentLoaded",()=>{
//     console.log("DOM is loaded !");
//     // let pText=document.querySelector('.text');
//     // console.log(pText);
// });

//_______________________________________________________
/*
let form = document.querySelector(".todoForm");
let todoList = document.querySelector(".todoList");
// // let todoInput=document.querySelector('input');
todoArr = [];

form.addEventListener('submit',function(event){
    event.preventDefault();
    // console.log(this.elements);
    let todoInput=this.elements["todoText"];
    let todoValue=todoInput.value.trim();

    if(todoValue){
        todoArr.push(todoValue);
        // console.log(todoArr);
        ShowTodoList(todoArr);
        todoInput.focus();
        todoInput.value="";
    }
    else{
        todoInput.style.borderColor="red";
    }
    // console.log(todoInput.value); 
});

function ShowTodoList(todoArray){
    todoList.innerHTML="";
    todoArray.forEach((todo,index) => {
        let newLi=document.createElement('li');
        newLi.classList.add('todo-item');
        // newLi.textContent=todo+" "+index;
        newLi.textContent=todo;
        let silBtn=document.createElement('button');
        silBtn.textContent='Sil';
        silBtn.addEventListener('click',()=>{
            // alert(index);
            alert(todoArray[index]);
            todoArray.splice(index,1);
            console.log(todoArray);
            ShowTodoList(todoArray);
        });
        newLi.append(silBtn);
        todoList.append(newLi);
    });
}
 */
//_______________________________________________________

let form = document.querySelector(".todoForm"); //form
let todoList = document.querySelector(".todoList"); //ul

// let operationList = [];
// let operationList = JSON.parse(sessionStorage.getItem("emeliyyatlar")) || [];
let operationList = JSON.parse(localStorage.getItem("emeliyyatlar")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let amountInp = e.target.elements["amount"];
  let checkInp = e.target.elements["type"];

  let operation = {
    id: Math.floor(Math.random() * 10000),
    amount: Number(amountInp.value),
    type: checkInp.value,
    createdAt: new Date(),
  };
  operationList.push(operation);

//   sessionStorage.setItem("emeliyyatlar", JSON.stringify(operationList));
localStorage.setItem("emeliyyatlar", JSON.stringify(operationList));

  // console.log(amountInp.value,checkInp.value,checkInp[0].checked);
  //   console.log(amountInp.value,"check-in arr-in deyeri >> ", checkInp.value);
  amountInp.value = "";
  amountInp.focus();
  document.querySelector("input[value='ML']").checked = false;
  document.querySelector("input[value='MC']").checked = false;
  //   for (const rb of checkInp) {
  //       console.log(rb.checked);
  //     //   console.log(rb.value);
  //       rb.checked=false;
  //     }

  console.log(operationList);
  ShowOperations(operationList);
});

function ShowOperations(operations) {
  console.log("ShowOperations function is working !");
  todoList.innerHTML = "";
  operations.forEach((operation) => {
    let liElement = document.createElement("li");
    liElement.classList.add("todo-item");

    liElement.textContent = `${operation.type === "ML" ? " + " : " - "} ${
      operation.amount
    } AZN`;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";

    liElement.append(deleteBtn);
    todoList.append(liElement);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  ShowOperations(operationList);
});


// document.cookie="users=['Henry','Jack','Hilbert']; expires=Fri, 13 Sep 2024 10:35:00 UTC";