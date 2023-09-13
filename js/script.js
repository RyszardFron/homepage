{
  const welcome = () => {
    console.log("Hello world!");
  };

  const bodyChangeBack = () => {
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

  const articleChangeBack = () => {
    const article = document.querySelector(".article");
    article.classList.toggle("article__dark");
  };

  const sectionChangeBack = () => {
    const sectionBackground = document.querySelectorAll(".section");
    sectionBackground.forEach(sectionBack => {
      sectionBack.classList.toggle("section__dark");
    })
  };


  const init = () => {
    const changeBackgroundButton = document.querySelector(".button");
    changeBackgroundButton.addEventListener("click", bodyChangeBack);
    changeBackgroundButton.addEventListener("click", navigationChangeBack);
    changeBackgroundButton.addEventListener("click", articleChangeBack);
    changeBackgroundButton.addEventListener("click", sectionChangeBack);

    welcome()
  };
  init();
};
