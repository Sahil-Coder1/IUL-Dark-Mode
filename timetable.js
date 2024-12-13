const rows = document.querySelectorAll("table th, table td");

rows.forEach((row, index) => {
  row.style.color = "#FAF7F0";
  row.style.border = "0px solid #fff";

  if (index % 2 === 0) {
    row.style.backgroundColor = "#3C3D37";
  } else {
    row.style.backgroundColor = "#444444";
  }
});

document.getElementById("form1").style.backgroundColor = "#3C3D37";
document.getElementsByClassName("m-movie-title")[0].style.cssText = `
background: linear-gradient(to right, #2196f3,#444444 );
`;
document.getElementsByClassName("m-movie-body")[0].style.cssText = `
background-color:#444444;
border:0px solid #fff;
color:red;
`;
