// Custom Scripts
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

function modals() {

  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtns = document.querySelectorAll('.modal__close');
  const modals = document.querySelectorAll('.modal');
  const body = document.querySelector('body')

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const modalId = btn.dataset.modalId;
      const modal = document.getElementById(modalId);
      modal.classList.add('show');
      body.classList.add('locked');
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      modal.classList.remove('show');
      body.classList.remove('locked');
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('show');
      body.classList.remove('locked');
    }
  });

}

modals();
