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

  const init = () => {
    const changeBackgroundButton = document.querySelector(".button");
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome()
  };
  init();
};
