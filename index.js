const productContainetOne = document.querySelector("#one-products");
const productContainetTwo = document.querySelector("#two-products");
const btnOneArray = document.querySelector("#arrowOne");
const btnTwoArray = document.querySelector("#arrowTwo");
const mouseOverTotal = document.querySelector("#mouseTotal");
const mouseOverBasket = document.querySelector("#mouseBasket");
const tooltipFree = document.querySelector("#popupFree");
const containerLabel = document.querySelector(".basket__container-label");
const countProduct = document.querySelector(".basket__count-product");
const checkAll = document.querySelector("#all");
const checkBox = document.querySelectorAll("#check");
const checkOrder = document.querySelector("#orderCheck");
const btnOrder = document.querySelector(".total__button");
const totalSum = document.querySelector("#totalSum");
const penDelivery = document.querySelector("#penDelivery");
const penPayment = document.querySelector("#penPayment");
const popupPayment = document.querySelector("#popupPayment");
const popupDevilery = document.querySelector("#popupDelivery");
const textBtnPayment = document.querySelector("#textButtonPayment");
const textBtnDelivery = document.querySelector("#textButtonDelivery");
const btnClosePayment = document.querySelector("#closePayment");
const btnCloseDelivery = document.querySelector("#closeDelivery");
const btnSubmitPayment = document.querySelector("#buttonPayment");

const handleClickArray = (evt) => {
  if (evt.target.id === btnOneArray.id) {
    productContainetOne.classList.toggle("basket__close-block");
    containerLabel.style.display = "none";
  } else if (evt.target.id === btnTwoArray.id) {
    productContainetTwo.classList.toggle("basket__close-block");
    btnOneArray.src = "./image/arrow-bottom.svg";
  }

  productContainetOne.classList.contains("basket__close-block")
    ? (btnOneArray.src = "./image/arrow-bottom.svg") &&
      (containerLabel.style.display = "none") &&
      (countProduct.style.display = "block")
    : (btnOneArray.src = "./image/arrow-top.svg") &&
      (containerLabel.style.display = "flex") &&
      (countProduct.style.display = "none");

  productContainetTwo.classList.contains("basket__close-block")
    ? (btnTwoArray.src = "./image/arrow-bottom.svg")
    : (btnTwoArray.src = "./image/arrow-top.svg");
};

// const openTooltip = (evt) => {
//   if (evt.target.id === mouseOverTotal.id) {
//     popupFreeOne.classList.add("popup__open");
//   }
// };

// const closeTooltip = (evt) => {
//   if (evt.target.id === mouseOverTotal.id) {
//     popupFree.classList.remove("popup_open");
//   }
// };

const handleCheckAll = () => {
  let arrCheck = Array.from(checkBox);
  arrCheck.forEach((item, i) => {
    if (checkAll.checked === true) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
};

const handleCheckOrder = () => {
  checkOrder.checked === true
    ? (btnOrder.textContent = `Оплатить ${totalSum.textContent}`)
    : (btnOrder.textContent = "Заказать");
};

const openPopup = (evt) => {
  evt.target.id !== penDelivery.id && evt.target.id !== textBtnDelivery.id
    ? popupPayment.classList.add("popup_opened")
    : popupDevilery.classList.add("popup_opened");
};

const closePopup = (evt) => {
  evt.target.id !== btnCloseDelivery.id
    ? popupPayment.classList.remove("popup_opened")
    : popupDevilery.classList.remove("popup_opened");
};

const closeEsc = (evt) => {
  if (evt.key === "Escape") {
    popupPayment.classList.remove("popup_opened");
  }
};

const handleSubmitPaymentSistem = (evt) => {
  evt.preventDefault();
};

btnSubmitPayment.addEventListener("click", handleSubmitPaymentSistem);
document.addEventListener("keydown", closeEsc);
textBtnPayment.addEventListener("click", openPopup);
textBtnDelivery.addEventListener("click", openPopup);
btnCloseDelivery.addEventListener("click", closePopup);
btnClosePayment.addEventListener("click", closePopup);
penPayment.addEventListener("click", openPopup);
penDelivery.addEventListener("click", openPopup);
checkOrder.addEventListener("click", handleCheckOrder);
checkAll.addEventListener("click", handleCheckAll);
// mouseOverTotal.addEventListener("mouseover", openTooltip);
// mouseOverBasket.addEventListener("mouseover", openTooltip);
// mouseOverTotal.addEventListener("mouseout", closeTooltip);
// mouseOverBasket.addEventListener("mouseout", closeTooltip);
btnOneArray.addEventListener("click", handleClickArray);
btnTwoArray.addEventListener("click", handleClickArray);
