export default function validateForm() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.setAttribute("isReady", false);
    input.addEventListener("input", () => {
      input.checkValidity();
      input.reportValidity();

      if (input.validity.valueMissing) {
        input.setAttribute("isReady", false);
      } else if (input.validity.patternMismatch) {
        input.setAttribute("isReady", false);
      } else {
        input.setAttribute("isReady", true);
        input.setCustomValidity("");
      }
    });
    // return button.setAttribute("isReady", true);
  });
  // return button.setAttribute("isReady", true);
}
