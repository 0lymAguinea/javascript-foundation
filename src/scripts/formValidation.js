export default function validateForm() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.setAttribute("isReady", false);
    input.addEventListener("input", () => {
      input.checkValidity();
      input.reportValidity();

      if (input.validity.valid) {
        input.setAttribute("isReady", true);
      } else if (input.validity.valueMissing) {
        input.setAttribute("isReady", false);
      } else if (input.validity.patternMismatch) {
        input.setCustomValidity("Correct coordinate input: 5,1 | 0,9");
        input.setAttribute("isReady", false);
      }
    });
    // return button.setAttribute("isReady", true);
  });
  // return button.setAttribute("isReady", true);
}
