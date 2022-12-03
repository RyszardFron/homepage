{
  const welcome = () => {
    console.log("Witam wszystkich zaineresowanych :)");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
        
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
