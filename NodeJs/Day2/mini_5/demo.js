console.log("Hey!!");
function circle() {
  const note = document.querySelector(".mydiv1");

  note.style.cssText += "border-radius:70%";
}
function turnred() {
  const note = document.querySelector(".mydiv1");

  note.style.cssText += "background-color:red";
}
function againsquare() {
  const note = document.querySelector(".mydiv1");

  note.style.cssText += "border-radius:0%";
}
function green() {
  const note = document.querySelector(".mydiv1");

  note.style.cssText += "background-color:green";
}

function fadeOut() {
  const note = document.querySelector(".mydiv1");

  note.style.cssText += "opacity:0";
}
function fun() {
  console.log("Hello");
  document.getElementById("mydiv").textContent = "Go";

  setTimeout(circle, 1000);

  setTimeout(turnred, 1500);
  setTimeout(againsquare, 2500);
  setTimeout(green, 3000);
  console.log("indranil");
  setTimeout(fadeOut, 3500);
}
function fun1() {
  console.log("Button Clicked!!");
}

async function f() {
  console.log("Hello");
  document.getElementById("mydiv").textContent = "Go";

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      circle();
      resolve();
    }, 1000);
  });
  let result = await promise;
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      turnred();
      resolve();
    }, 500);
  });
  await promise1;
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      againsquare();
      resolve();
    }, 1000);
  });

  await promise1;
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      green();
      resolve();
    }, 500);
  });

  await promise3;
  let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      fadeOut();
      resolve();
    }, 500);
  });

  await promise4;
}

f();

window.onload = function () {
  console.log("Windows On load Is Running");
  var div1 = document.getElementById("mydiv");
  div1.onclick = f;
  console.log("Before Clicking OF the button");
  document.getElementById("mybtn").onclick = fun1;
  console.log("After Clicking OF the button");
};
