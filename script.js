document.addEventListener('DOMContentLoaded', () => {
  // === Бургер‑меню ===
  const menuBtn   = document.querySelector('.btn-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // === Логика слайдера ===
  const track   = document.querySelector('.slider-track');
  const slides  = Array.from(document.querySelectorAll('.slider-slide'));
  const prevBtn = document.querySelector('.slider-arrow--prev');
  const nextBtn = document.querySelector('.slider-arrow--next');
  const dotsCon = document.querySelector('.slider-dots');
  let current   = 0;
  const total   = slides.length;

  // создаём точки
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.classList.add('slider-dot');
    if (idx === 0) dot.classList.add('active');
    dot.dataset.index = idx;
    dotsCon.append(dot);
  });
  const dots = Array.from(dotsCon.children);

  function goToSlide(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[current].classList.add('active');
  }

  prevBtn.addEventListener('click', () => goToSlide(current - 1));
  nextBtn.addEventListener('click', () => goToSlide(current + 1));
  dots.forEach(dot =>
    dot.addEventListener('click', e => goToSlide(+e.currentTarget.dataset.index))
  );
});
