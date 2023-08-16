const productContainetOne = document.querySelector("#one-products");
const productContainetTwo = document.querySelector("#two-products");
const btnOneArray = document.querySelector("#arrowOne");
const btnTwoArray = document.querySelector("#arrowTwo");
const mouseOverTotal = document.querySelector("#mouseTotal");
const mouseOverBasket = document.querySelector("#mouseBasket");
const tooltipFreeTotal = document.querySelector("#toolktipTotal");
const toolktipFreeBasket = document.querySelector("#toolktipBasket");
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
const btnSubmitDelivery = document.querySelector("#buttonDelivery");
const btnCheckDelivery1 = document.querySelector("#btnCheckDelivery-1");
const btnCheckDelivery2 = document.querySelector("#btnCheckDelivery-2");
const starContainer = document.querySelectorAll(".popup__container-star");
const addressText = document.querySelector("#addressText");
const mouseOverSaleMobile = document.querySelector("#tooltipPriceTextMobile");
const mouseOverSale = document.querySelector("#tooltipPriceText");
const tooltipPriceMobile = document.querySelector("#tooltipPriceMobile");
const tooltipPrice = document.querySelector("#tooltipPrice");
const btnTooltipHelp = document.querySelector("#btnTooltipHelp");
const tooltipHelp = document.querySelector("#tooltipHelp");
const inputs = document.querySelectorAll(".basket__input");
const error = document.querySelector("");

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

const openTooltip = (evt) => {
  if (evt.target.id === mouseOverTotal.id) {
    tooltipFreeTotal.classList.add("total__tooltip_visibility");
  } else if (evt.target.id === mouseOverBasket.id) {
    toolktipFreeBasket.classList.add("basket__tooltip_visibility");
  }
};

const closeTooltip = (evt) => {
  if (evt.target.id === mouseOverTotal.id) {
    tooltipFreeTotal.classList.remove("total__tooltip_visibility");
  } else if (evt.target.id === mouseOverBasket.id) {
    toolktipFreeBasket.classList.remove("basket__tooltip_visibility");
  }
};

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
  evt.target.id !== btnCloseDelivery.id &&
  evt.target.id !== btnSubmitDelivery.id
    ? popupPayment.classList.remove("popup_opened")
    : popupDevilery.classList.remove("popup_opened");
};

const closeEsc = (evt) => {
  if (evt.key === "Escape") {
    popupPayment.classList.remove("popup_opened") ||
      popupDevilery.classList.remove("popup_opened");
  }
};

const handleSubmitPaymentSistem = (evt) => {
  evt.preventDefault();
};

const handleCheckDelivery = (evt) => {
  evt.preventDefault();
  if (evt.target.id === btnCheckDelivery1.id) {
    btnCheckDelivery2.classList.add("popup__button-checked_opacite");
    btnCheckDelivery1.classList.remove("popup__button-checked_opacite");
    starContainer.forEach((item, i) => {
      item.style.display = "flex";
    });
  } else if (evt.target.id === btnCheckDelivery2.id) {
    btnCheckDelivery2.classList.remove("popup__button-checked_opacite");
    btnCheckDelivery1.classList.add("popup__button-checked_opacite");
    starContainer.forEach((item, i) => {
      item.style.display = "none";
    });
  }
};

const handleClickSubmitDelivery = (evt) => {
  evt.preventDefault();
  if (evt.target.id === btnSubmitDelivery.id) {
    closePopup(evt);
  } else if (evt.target.id === btnSubmitPayment.id) {
    closePopup(evt);
  }
};

const openTooltipSale = (evt) => {
  if (evt.target.id === mouseOverSale.id) {
    tooltipPrice.classList.add("basket__tooltip-price_visibility");
  } else if (evt.target.id === mouseOverSaleMobile.id) {
    tooltipPriceMobile.classList.add("basket__tooltip-price_visibility");
  }
};

const closeTooltipSale = (evt) => {
  if (evt.target.id === mouseOverSale.id) {
    tooltipPrice.classList.remove("basket__tooltip-price_visibility");
  } else if (evt.target.id === mouseOverSaleMobile.id) {
    tooltipPriceMobile.classList.remove("basket__tooltip-price_visibility");
  }
};

const openTooltipHelp = () => {
  tooltipHelp.classList.add("basket__tooltip-price_visibility");
};

const closeTooltipHelp = () => {
  tooltipHelp.classList.remove("basket__tooltip-price_visibility");
};

for (let input of inputs) {
  input.addEventListener("blur", () => {
    let rule = this.dataset.rule;
    let value = this.value;

    switch (rule) {
      case "number":
        break;
    }
    console.log(rule);
  });
}

btnTooltipHelp.addEventListener("mouseover", openTooltipHelp);
btnTooltipHelp.addEventListener("mouseout", closeTooltipHelp);
mouseOverSale.addEventListener("mouseover", openTooltipSale);
mouseOverSale.addEventListener("mouseout", closeTooltipSale);
mouseOverSaleMobile.addEventListener("mouseover", openTooltipSale);
mouseOverSaleMobile.addEventListener("mouseout", closeTooltipSale);
btnSubmitPayment.addEventListener("click", handleClickSubmitDelivery);
btnSubmitDelivery.addEventListener("click", handleClickSubmitDelivery);
btnCheckDelivery1.addEventListener("click", handleCheckDelivery);
btnCheckDelivery2.addEventListener("click", handleCheckDelivery);
btnSubmitPayment.addEventListener("submit", handleSubmitPaymentSistem);
document.addEventListener("keydown", closeEsc);
btnCloseDelivery.addEventListener("click", closePopup);
btnClosePayment.addEventListener("click", closePopup);
textBtnPayment.addEventListener("click", openPopup);
textBtnDelivery.addEventListener("click", openPopup);
penPayment.addEventListener("click", openPopup);
penDelivery.addEventListener("click", openPopup);
checkOrder.addEventListener("click", handleCheckOrder);
checkAll.addEventListener("click", handleCheckAll);
mouseOverTotal.addEventListener("mouseover", openTooltip);
mouseOverBasket.addEventListener("mouseover", openTooltip);
mouseOverTotal.addEventListener("mouseout", closeTooltip);
mouseOverBasket.addEventListener("mouseout", closeTooltip);
btnOneArray.addEventListener("click", handleClickArray);
btnTwoArray.addEventListener("click", handleClickArray);
