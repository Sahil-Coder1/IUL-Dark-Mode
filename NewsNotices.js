const body = document.querySelector("body");

document.body.style.backgroundColor = "#1E1E1E";

const rows = document.querySelectorAll(".m-movie-body");
rows.forEach((row, index) => {
  row.style.backgroundColor = index % 2 === 0 ? "#505050" : "#383838";
});

const headings = document.querySelectorAll("h2");
headings.forEach((row, index) => {
  row.style.backgroundColor = "#383838";
});

const head = document.querySelectorAll("resp-accordion hor_1");

setTimeout(() => {
  head.forEach((row) => {
    // row.style.cssText = ""; 
    row.style.cssText = "background-color:rgb(226, 22, 22);"; 
  });
}, 2000); // 1000 milliseconds = 1 second
