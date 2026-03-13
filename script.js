
const role = document.querySelector("header .text-wrapper > span");
// text 
const phrase = "Math and developer";
// outo control text and icon
let index = 0;
let isDeleting = false;

const typeWriter = () => {
  if (!isDeleting) {
    // Typing forward
    if (index < phrase.length) {
      role.textContent += phrase.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    } else {
      // Finished typing, wait then start deleting
      isDeleting = true;
      setTimeout(typeWriter, 2000); // Pause for 2 seconds before deleting
    }
  } else {
    // Deleting backward
    if (index > 0) {
      role.textContent = phrase.substring(0, index - 1);
      index--;
      setTimeout(typeWriter, 50); // Faster when deleting
    } else {
      // Finished deleting, start typing again
      isDeleting = false;
      setTimeout(typeWriter, 500); // Short pause before typing again
    }
  }
};

typeWriter();

//​ dark mode light mode
const moonIcon = "<i class='uil uil-moon'></i>";
const sunIcon = "<i class='uil uil-sun'></i>";
const themeButton = document.querySelector(".change-theme");
const elementsWithBackcgroundToChange =
  document.querySelectorAll(".back-theme");
const elementsWithTextToChange = document.querySelectorAll(".text-theme");

const storedTheme = localStorage.getItem("theme");

if (!storedTheme || storedTheme === "dark") {
  localStorage.setItem("theme", "dark");
  themeButton.innerHTML = sunIcon;

  elementsWithBackcgroundToChange.forEach((element) => {
    element.classList.remove("back-theme");
  });

  elementsWithTextToChange.forEach((element) => {
    element.classList.remove("text-theme");
  });
} else {
  localStorage.setItem("theme", "light");
  themeButton.innerHTML = moonIcon;
}

const setButtonIcon = () => {
  const currentIconClass = themeButton.children[0].classList[1];

  if (currentIconClass === "uil-sun") {
    localStorage.setItem("theme", "light");
    themeButton.innerHTML = moonIcon;
    return;
  }

  localStorage.setItem("theme", "dark");
  themeButton.innerHTML = sunIcon;
};

themeButton.addEventListener("click", () => {
  setButtonIcon();

  elementsWithBackcgroundToChange.forEach((element) => {
    element.classList.toggle("back-theme");
  });

  elementsWithTextToChange.forEach((element) => {
    element.classList.toggle("text-theme");
  });
});