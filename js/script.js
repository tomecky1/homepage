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
    const btnChange = document.querySelector(".js-btnColor");

    const button = document.querySelector(".js-button");

    btnChange.addEventListener("click", toggleBackground);
    button.addEventListener("click", removeImage);

    welcome();
  };

  init();
}
