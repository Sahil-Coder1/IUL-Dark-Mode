// Select elements once
const form = document.getElementsByTagName("form")[0];
const rows = document.querySelectorAll(".m-movie-body");
const heads = document.querySelectorAll(".m-movie-title");
const listItems = document.querySelectorAll(".m-movie-body a");

// Set form background color
form.style.backgroundColor = "#1E1E1E";

// Set row background color with conditional logic
rows.forEach((row, index) => {
  row.style.backgroundColor = index % 2 === 0 ? "#505050" : "#383838";
});

// Set movie title styles efficiently
heads.forEach((head) => {
  head.style.cssText = `
    background: linear-gradient(to right, #1A237E, #64B5F6);
    color: white;
    padding: 5px;
    border-radius: 5px;
  `;
});

// Set list item color
listItems.forEach((listItem) => {
  listItem.style.color = "#B0B3B8";
});