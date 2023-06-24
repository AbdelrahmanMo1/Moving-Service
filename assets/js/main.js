$(function () {
  $("#menu-btn").click(function () {
    $("#menu-btn").toggleClass("change");
    $(".menu-mobile").slideToggle(900);
  });

  var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 700,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  });

  const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;
    const increaseCount = setInterval(() => {
      initialValue += increment;
      if (initialValue > value) {
        el.textContent = `${value}+`;
        clearInterval(increaseCount);
        return;
      }
      el.textContent = `${initialValue} +`;
    }, 1);
  };

  const items = [...document.querySelectorAll(".num")];

  items.forEach((item) => {
    updateCount(item);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".to-top").addClass("active");
    } else {
      $(".to-top").removeClass("active");
    }
  });
});
