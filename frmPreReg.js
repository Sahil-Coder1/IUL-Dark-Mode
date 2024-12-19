(function() {
  // Select elements once after DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementsByTagName("form")[0];
    const rows = document.querySelectorAll(".m-movie-body");
    const headings = document.querySelectorAll("h5, legend");
    const listItems = document.querySelectorAll(".m-movie-body a");
    const heads = document.querySelectorAll(".m-movie-title");

    // Set styles
    form.style.backgroundColor = "#1E1E1E";

    rows.forEach((row, index) => {
      row.style.backgroundColor = index % 2 === 0 ? "#505050" : "#383838";
    });

    heads.forEach((head) => {
      head.style.cssText = `
        background: linear-gradient(to right, #1A237E, #64B5F6);
        color: white;
        padding: 5px;
        border-radius: 5px;
      `;
    });

    headings.forEach((heading) => {
      heading.style.color = "#B0B3B8";
    });

    listItems.forEach((listItem) => {
      listItem.style.color = "#B0B3B8";
    });
  });
})();