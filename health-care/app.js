window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const menuBg = document.querySelector(".menu-bg");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  menuToggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menuBg.classList.add("active");
    menu.classList.add("active");
    menuClose.classList.add("active");
  }
  menuClose.addEventListener("click", function () {
    menuBg.classList.remove("active");
    menu.classList.remove("active");
    this.classList.remove("active");
    // change
  });
});
$(".testimonial-list").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev slick-arrow'><i class='fas fa-long-arrow-alt-left' ></i></button>",
  nextArrow:
    "<button type='button' class='slick-next slick-arrow'><i class='fas fa-long-arrow-alt-right'></i></button>",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
