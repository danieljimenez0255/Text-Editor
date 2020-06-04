/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */

window.onload = () => {
  let updatedText = updateText();
  document.getElementById("bold").addEventListener("click", () => {
    removeActive();
    makeBold(updatedText);
  });
  document.getElementById("italic").addEventListener("click", () => {
    removeActive();
    makeItalic(updatedText);
  });
  document.getElementById("underline").addEventListener("click", () => {
    removeActive();
    makeUnderline(updatedText);
  });
  document.getElementById("translateText").addEventListener("click", () => {
    // quickStart();
  });
  document.getElementById("left-align").addEventListener("click", () => {
    removeActive();
    alignText(updatedText, "align-left");
  });
  document.getElementById("center-align").addEventListener("click", () => {
    removeActive();
    alignText(updatedText, "center");
  });
  document.getElementById("right-align").addEventListener("click", () => {
    removeActive();
    alignText(updatedText, "align-right");
  });
};

let boldCount = 0,
  italicCount = 0,
  underlineCount = 0;
(count1 = 0), (count2 = 0), (count3 = 0);

function updateText() {
  // CODE GOES HERE
  //adds keydown event to detect key clicks

  document.getElementById("text-input").addEventListener("keydown", (event) => {

    //formatted text field only will show letters, not other special characters
    if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 32) {
      return (document.getElementById("text-output").innerText += event.key);
    } else {
      return;
    }
  });
  //return formatted text to pass into styles
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
  boldCount++;
  //CODE GOES HERE
  document.getElementById("bold").classList.add("active");
  document.getElementById("text-output").style.fontWeight = "700";
  removeSty();
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  italicCount++;
  document.getElementById("italic").classList.add("active");
  document.getElementById("text-output").style.fontStyle = "italic";
  removeSty();
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  //CODE GOES HERE
  underlineCount++;
  console.log(underlineCount);
  document.getElementById("underline").classList.add("active");
  document.getElementById("text-output").style.textDecoration = "underline";
  removeSty();
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */

function alignText(elem, alignType) {
  // CODE GOES HERE
  let style = document.getElementById("text-output");
  if (alignType == "align-left") {
    count1++;
    document.getElementById("left-align").classList.add("active");
    style.style.textAlign = "left";
    removeSty();
  } else if (alignType == "align-right") {
    count2++;
    document.getElementById("right-align").classList.add("active");
    style.style.textAlign = "right";
    removeSty();
  } else {
    count3++;
    document.getElementById("center-align").classList.add("active");
    style.style.textAlign = "center";
    removeSty();
  }
  return style;
}

//removes active classes from elements when another is invoked
const removeActive = () => {
  let buttonsClasses = document.getElementsByTagName("button");
  for (let button of buttonsClasses) {
    if (button.classList.contains("active") == true) {
      button.classList.remove("active");
    }
  }
};

function removeSty() {
  // console.log(count);
  if (
    count1 === 2 ||
    count2 === 2 ||
    count3 === 2 ||
    boldCount === 2 ||
    italicCount === 2 ||
    underlineCount === 2
  ) {
    document.getElementById("text-output").removeAttribute("style");
    removeActive();
    (count1 = 0),
      (count2 = 0),
      (count3 = 0),
      (boldCount = 0),
      (italicCount = 0),
      (underlineCount = 0);
  }
}
