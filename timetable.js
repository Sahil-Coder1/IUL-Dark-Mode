const rows = document.querySelectorAll("table th, table td");
rows.forEach((row, index) => {
  row.style.color = "#FAF7F0"; // Light text color
  row.style.border = "1px solid #555555"; // Subtle border for clarity

  row.style.backgroundColor = index % 2 === 0 ? "#3C3D37" : "#444444";
});

document.getElementById("form1").style.backgroundColor = "#1E1E1E";

document.getElementsByClassName("m-movie-title")[0].style.cssText = `
background: linear-gradient(to right, #2196f3, #64B5F6);
color: white;
padding: 10px;
border-radius: 8px;
`;

document.getElementsByClassName("m-movie-body")[0].style.cssText = `
background-color: #444444;
border: 0px solid #555555;
color: #E57373; /* Softer red text */
padding: 10px;
border-radius: 5px;
`;
