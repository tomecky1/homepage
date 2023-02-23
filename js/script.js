{
  const welcome = () => {
    console.log("Cześć wędrowny developerze! ✌");
  };

  const toggleBackground = () => {
    const bodyColor = document.querySelector(".body");
    const pink = document.querySelector(".js-normal");
    bodyColor.classList.toggle("background");
    pink.innerText = bodyColor.classList.contains("background")
      ? "normalne"
      : "pstrokate";
  };

  const removeImage = () => {
    const image = document.querySelector(".js-image");
    image.remove();
  };

  const init = () => {
    const buttonChange = document.querySelector(".js-buttonColor");

    const button = document.querySelector(".js-button");

    buttonChange.addEventListener("click", toggleBackground);
    button.addEventListener("click", removeImage);

    welcome();
  };

  init();
}
