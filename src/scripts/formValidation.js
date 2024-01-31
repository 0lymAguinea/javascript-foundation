export default function validateForm() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.setAttribute("isReady", false);
    input.addEventListener("input", () => {
      input.checkValidity();
      input.reportValidity();

      if (input.validity.patternMismatch) {
        input.setAttribute("isReady", false);
        input.setCustomValidity("Correct ship cooridnate example: 5,2 | 9,0");
      } else {
        input.setAttribute("isReady", true);
        input.setCustomValidity("");
      }
    });
  });
}
