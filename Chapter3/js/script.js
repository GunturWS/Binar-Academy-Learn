//document write will be executed when html is loaded
// document.write("Hello World");
// document.write("<h2>Saya sedang belajar DOM</h2>");

//DOM Selector
const app = document.getElementById("app");
app.innerText = "This is app element";

app.style.background = "green";
app.style.padding = "20px";

//DOM Selector (get elements by class name)
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

// paragraph 1 (index = 0)
paragraphs[0].innerText = "ini adalah paragraf pertama";
paragraphs[0].style.color = "red";

//paragraph 2 (index = 2)
paragraphs[1].style.color = "blue";

//paragraph 3 (index =3)
paragraphs[2].style.color = "pink";

//setelah 5 detik maka warna akan kembali seperti dulu lagi
setTimeout(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "black";
  }
}, 5000);


//DOM MANIPULATION
const title = document.createElement("h1");
title.textContent = "kalimat ini dibuat oleh DOM";
document.body.append(title);
// saya mau menghapus paragraf 3 after 7 detik
setTimeout(() => {
    paragraphs[2].remove();
}, 7000);


//Change COlor app
const bgColor = document.getElementById("bgColor");
const textColor = document.getElementById("textColor");

bgColor.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
});

textColor.addEventListener("change", (event) => {
    document.body.style.color = event.target.value;
});
