
(() => {
  if (document.getElementById("auto-select-container")) return;

  const container = document.createElement("div");
  container.id = "auto-select-container";

  Object.assign(container.style, {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    zIndex: "2147483647",
    display: "flex",
    gap: "8px",
    fontFamily: "Arial, sans-serif"
  });

  function showToast(message, color = "#16a34a") {
    document.getElementById("auto-select-toast")?.remove();

    const toast = document.createElement("div");
    toast.id = "auto-select-toast";
    toast.textContent = message;

    Object.assign(toast.style, {
      position: "fixed",
      bottom: "85px",
      right: "20px",
      zIndex: "2147483647",
      padding: "12px 18px",
      background: color,
      color: "#fff",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "600",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
      opacity: "0",
      transform: "translateY(10px)",
      transition: "opacity 0.25s ease, transform 0.25s ease"
    });

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateY(0)";
    });

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";

      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function createButton(id, text, color) {
    const button = document.createElement("button");

    button.id = id;
    button.type = "button";
    button.textContent = text;

    Object.assign(button.style, {
      padding: "12px 18px",
      border: "none",
      borderRadius: "8px",
      background: color,
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 4px 14px rgba(0,0,0,0.22)"
    });

    button.addEventListener("mouseenter", () => {
      button.style.opacity = "0.85";
    });

    button.addEventListener("mouseleave", () => {
      button.style.opacity = "1";
    });

    return button;
  }

  const firstButton = createButton(
    "auto-select-first-button",
    "Select First",
    "#16a34a"
  );

  const lastButton = createButton(
    "auto-select-last-button",
    "Select Last",
    "#2563eb"
  );

  function selectOptions(position) {
    const ignoreSection = document.querySelector(
      ".col-md-12 .row.mt-3"
    );

    const visibleRadios = Array.from(
      document.querySelectorAll('input[type="radio"]')
    ).filter((radio) => {
      const style = window.getComputedStyle(radio);

      const isVisible =
        radio.getClientRects().length > 0 &&
        style.visibility !== "hidden" &&
        style.display !== "none";

      return (
        isVisible &&
        !radio.disabled &&
        !ignoreSection?.contains(radio) &&
        radio.name.trim() !== ""
      );
    });

    const groups = {};

    for (const radio of visibleRadios) {
      (groups[radio.name] ??= []).push(radio);
    }

    let selectedGroups = 0;

    for (const radios of Object.values(groups)) {
      const targetRadio =
        position === "first"
          ? radios[0]
          : radios[radios.length - 1];

      if (!targetRadio.checked) {
        targetRadio.click();
      }

      selectedGroups++;
    }

    showToast(
      `✓ ${selectedGroups} ${position} options selected!`
    );
  }

  firstButton.addEventListener("click", () => {
    selectOptions("first");
  });

  lastButton.addEventListener("click", () => {
    selectOptions("last");
  });

  container.appendChild(firstButton);
  container.appendChild(lastButton);

  document.body.appendChild(container);
})();
