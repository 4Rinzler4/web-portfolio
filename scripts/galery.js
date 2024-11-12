const checkCarousel = () => {
  const carousels = [
    { node: document.querySelector(".embla--right .embla__viewport"), direction: "next" },
    { node: document.querySelector(".embla--left .embla__viewport"), direction: "prev" }
  ];

  carousels.forEach((carousel) => {
    const slidesContainer = carousel.node.closest(".embla").querySelector(".embla__container");
    const slides = Array.from(slidesContainer.querySelectorAll(".embla__slide"));

    if (carousel.node && slidesContainer && slides.length > 1) {
      const repeatCount = 4;

      for (let i = 0; i < repeatCount; i++) {
        const startClones = slides.map((slide) => slide.cloneNode(true));
        const endClones = slides.map((slide) => slide.cloneNode(true)).reverse();

        endClones.forEach((clone) => slidesContainer.insertBefore(clone, slidesContainer.firstChild));
        startClones.forEach((clone) => slidesContainer.appendChild(clone));
      }

      const emblaApi = EmblaCarousel(carousel.node, { align: "start", loop: true });
      emblaApi.on("init", () => {
        emblaApi.scrollTo(slides.length * repeatCount, false);
      });

      let scrollInterval;
      const scrollSpeed = 5000; 

      const startContinuousScroll = () => {
        scrollInterval = setInterval(() => {
          carousel.direction === "next" ? emblaApi.scrollNext() : emblaApi.scrollPrev();
        }, scrollSpeed);
      };

      const stopContinuousScroll = () => clearInterval(scrollInterval);

      startContinuousScroll();
      carousel.node.addEventListener("mouseenter", stopContinuousScroll);
      carousel.node.addEventListener("mouseleave", startContinuousScroll);
    }
  });
};

checkCarousel();
