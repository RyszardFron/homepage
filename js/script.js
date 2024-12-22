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

  const headerChangeFont = () => {
    const headerColor = document.querySelector(".header__text");
    headerColor.classList.toggle("header__dark");
  };

  const buttonChangeBack = () => {
    const buttonChange= document.querySelector(".button__button");
    buttonChange.classList.toggle("button__dark");
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

  const contactChangeColor = () => {
    const contactColor = document.querySelector(".contact");
    contactColor.classList.toggle("contact__dark");
  };

  const contactChangeFont = () => {
    const contactFontColor = document.querySelectorAll(".contact__link");
    contactFontColor.forEach(contactFont => {
      contactFont.classList.toggle("contact__dark");
    })
  };


  const init = () => {
    const changeBackgroundButton = document.querySelector(".button");
    changeBackgroundButton.addEventListener("click", bodyChangeBack);
    changeBackgroundButton.addEventListener("click", headerChangeFont);
    changeBackgroundButton.addEventListener("click", buttonChangeBack);
    changeBackgroundButton.addEventListener("click", navigationChangeBack);
    changeBackgroundButton.addEventListener("click", articleChangeBack);
    changeBackgroundButton.addEventListener("click", sectionChangeBack);
    changeBackgroundButton.addEventListener("click", contactChangeColor);
    changeBackgroundButton.addEventListener("click", contactChangeFont);


    welcome()
  };
  init();
};
