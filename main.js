document.getElementsByTagName("form")[0].style.backgroundColor = "#3C3D37";
const rows = document.querySelectorAll(".m-movie-body");
rows.forEach((row, index) => {
  row.style.backgroundColor = "#444444";
});
const heads = document.querySelectorAll(".m-movie-title");
heads.forEach((head, index) => {
  head.style.cssText = `
    background: linear-gradient(to right, #002945,#2196f3 );`;
});
