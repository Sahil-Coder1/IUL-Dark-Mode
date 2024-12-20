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
// const divs = document.querySelectorAll("div");
// divs.forEach((row, index) => {
//   row.style.backgroundColor = "#383838";
// });