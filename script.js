const shareBtn = document.querySelector(".share-btn");
const shareBox = document.querySelector(".share-box");

const toggleBtn = () => {
  shareBtn.classList.toggle("active");
};

const toggleBox = () => {
  shareBox.classList.toggle("active");
};

const handleClick = (e) => {
  toggleBtn();
  toggleBox();
};

shareBtn.addEventListener("click", handleClick);
