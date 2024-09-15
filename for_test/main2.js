// let userName=prompt("Adini daxil et");

// console.log(userName);

// sessionStorage.setItem("user",userName);

// console.log(sessionStorage.getItem("user"));

// if(userName){
//     localStorage.setItem("userLS",userName);
// }

// console.log(localStorage.getItem("userLS"));



let user = {
  name: "Jack",
  age: 27,
};

localStorage.setItem("istifadeci", JSON.stringify(user));

// console.log(user);
// console.log(JSON.stringify(user));

console.log(localStorage.key(0))
// console.log(localStorage["istifadeci"]);
console.log(localStorage[localStorage.key(0)]);
// localStorage.setItem("user2","Henry");
// console.log(localStorage.key(1));
// console.log(localStorage[localStorage.key(1)]);
console.log(localStorage.length);

setTimeout(() => {
    // localStorage.clear();
    localStorage.removeItem("user");
}, 5000);