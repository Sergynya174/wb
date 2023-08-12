const productContainetOne = document.getElementById("one-products");
const productContainetTwo = document.getElementById("two-products");
const btnOneArray = document.getElementById("arrowOne");
const btnTwoArray = document.getElementById("arrowTwo");

const handleClickArray = (evt) => {
  if (evt.target.id === btnOneArray.id) {
    productContainetOne.classList.toggle("basket__visible-block");
  } else if (evt.target.id === btnTwoArray.id) {
    productContainetTwo.classList.toggle("basket__visible-block");
  }
};

btnOneArray.addEventListener("click", handleClickArray);
btnTwoArray.addEventListener("click", handleClickArray);
