let quantity = 1;
let basePrice = 199;

function changeProduct(name, price, imgSrc) {
  document.getElementById("productName").innerText = name;
  basePrice = parseInt(price.replace(/\D/g, ""));
  updatePrice();
  document.getElementById("productImage").src = imgSrc;
}

function increaseQuantity() {
  quantity++;
  updatePrice();
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    updatePrice();
  }
}

function updatePrice() {
  const totalPrice = basePrice * quantity;
  document.getElementById("quantity").innerText = quantity;
  document.getElementById("productPrice").innerText =
    "Price: " + totalPrice + "€";
}

function scrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const scrollDuration = 1200;

  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(function () {
    if (window.scrollY != 0) {
      window.scrollBy(0, scrollStep);
    } else clearInterval(scrollInterval);
  }, 15);
}

function burgerToggle() {
  let headerList = document.getElementById("headerList");
  let burgerIcon = document.getElementById("burgerIcon");
  let root = document.querySelector('body')
  headerList.classList.toggle("active");

  if (headerList.classList.contains("active")) {
    burgerIcon.src = "./images/cancel.png";
    root.style.overflow = 'hidden'
  } else {
    burgerIcon.src = "./images/menu.png";
    root.style.overflow = 'auto'
  }
}

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
