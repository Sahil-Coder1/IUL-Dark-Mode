document.getElementsByTagName("form")[0].style.backgroundColor = "#1E1E1E";

const rows = document.querySelectorAll(".m-movie-body");
rows.forEach((row, index) => {
  row.style.backgroundColor = index % 2 === 0 ? "#505050" : "#383838";
});

const heads = document.querySelectorAll(".m-movie-title");
heads.forEach((head) => {
  head.style.cssText = `background: linear-gradient(to right, #1A237E, #64B5F6); color: white; padding: 5px; border-radius: 5px;`;
});

const headings = document.querySelectorAll("h5");
headings.forEach((heading) => {
  heading.style.color = "#B0B3B8";
});
const legend = document.querySelectorAll("legend");
legend.forEach((heading) => {
  heading.style.color = "#B0B3B8";
});
const listItems = document.querySelectorAll(".m-movie-body a");
listItems.forEach((heading) => {
  heading.style.color = "#B0B3B8";
});
