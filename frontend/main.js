document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

  // Background changer
  const bg = document.getElementById("bg-blur");

  function updateBackground() {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const img = activeSlide.querySelector("img");
    if (img) {
      bg.style.backgroundImage = `url('${img.src}')`;
    }
  }

  // Run once and also on every slide change
  updateBackground();
  swiper.on("slideChange", updateBackground);
});




  document.addEventListener("DOMContentLoaded", () => {
    // Find all elements marked to fade in
    const items = document.querySelectorAll(".fade-in");
    items.forEach((el, i) => {
      // Optional stagger (150ms between items). Remove if not needed.
      el.style.transitionDelay = (i * 150) + "ms";
      // Trigger the fade
      el.classList.add("opacity-100");
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
      duration: 800,   // animation speed in ms
      offset: 80,      // how far from the bottom before triggering
      easing: "ease",  // animation curve
      once: true       // animate only once (no repeat on scroll back)
    });
  });




document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const listenBtn = card.querySelector(".listen-btn");
    const defaultContent = card.querySelector(".default-content");
    const expandedContent = card.querySelector(".expanded-content");
    const closeBtn = card.querySelector(".close-btn");

    listenBtn.addEventListener("click", () => {
  defaultContent.classList.add("hidden");
  expandedContent.classList.remove("hidden");
  card.classList.add("expanded");   // ✅ just one toggle
});

closeBtn.addEventListener("click", () => {
  defaultContent.classList.remove("hidden");
  expandedContent.classList.add("hidden");
  card.classList.remove("expanded");
});
  });
});

