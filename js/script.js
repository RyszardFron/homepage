{
  const welcome = () => {
    console.log("Hello world!");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".button__text");

    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
  };

  const navigationChangeBack = () => {
    const navigationBackground = document.querySelectorAll(".navigation__link");
    navigationBackground.forEach(navigationBack => {
      navigationBack.classList.toggle("navigation__dark");
    })
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(".button");
    changeBackgroundButton.addEventListener("click", toggleBackground);
    changeBackgroundButton.addEventListener("click", navigationChangeBack);

    welcome()
  };
  init();
};
