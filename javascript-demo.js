
/**
 * Adds a fun button to the page.
 */
function addFunButton() {
  // Ask the document to create a button for us.
  let button = document.createElement("button");
  // Tell screen readers that this button will be changing.
  button.setAttribute("aria-live", "polite");
  // Set the text inside the button.
  button.innerText = "Let's have fun!";
  // Make the button all fancy
  button.style.backgroundColor = 'blue';
  button.style.color = 'white';
  button.style.padding = '12px';

  let focusHandler = () => {
    button.innerText = "Are you ready to have fun?";
  };
  // Tell the button what to do when we hover the mouse over it or
  // it gains keyboard focus.
  button.addEventListener("mouseover", focusHandler);
  button.addEventListener("focus", focusHandler);
  let blurHandler = () => {
    button.innerText = "Let's have fun!";
  };
  // Tell the button what to do when the mouse leaves the button or
  // it loses keyboard focus.
  button.addEventListener("mouseout", blurHandler);
  button.addEventListener("blur", blurHandler);
  // Tell button what to do when we click it.
  button.addEventListener("click", () => {
    button.innerText = "We are having fun";
    button.removeEventListener("mouseover", focusHandler);
    button.removeEventListener("focus", focusHandler);
    button.removeEventListener("mouseout", blurHandler);
    button.removeEventListener("blur", blurHandler);
    button.setAttribute("disabled", "true");
    button.style.backgroundColor = 'grey';
    button.style.color = 'black';
    setTimeout(() => {
      button.innerText = "We had fun!";
    }, 2500);
  });
  document.body.appendChild(button);
}
