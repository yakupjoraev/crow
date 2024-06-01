// Custom scripts

function sidebarBurger() {
  const container = document.querySelector('.sidebar');

  if (!container) {
    return null
  }

  const btn = container.querySelector('.sidebar__burger');

  btn.addEventListener('click', () => {
    container.classList.toggle('active')
    btn.classList.toggle('active-burger')
  })
}

sidebarBurger();


function profilePortfolioSlider() {
  const container = document.querySelector('.profile__portfolio-wrapper');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".profile__portfolio", {
    // slidesPerView: 'auto',
    slidesPerView: 'auto',
    spaceBetween: 24,

    // // Responsive breakpoints
    // breakpoints: {
    //   // // when window width is >= 320px
    //   // 767: {
    //   //   slidesPerView: 2,
    //   // },
    //   // // when window width is >= 480px
    //   // 991: {
    //   //   slidesPerView: 3,
    //   // },
    //   // when window width is >= 1450
    //   1450: {
    //     slidesPerView: 2.8,
    //   }
    // }
  });
}

profilePortfolioSlider();