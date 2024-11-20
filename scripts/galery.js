const checkCarousel = () => {
  const carousels = [
    { node: document.querySelector(".embla--right .embla__viewport"), direction: "next" },
    { node: document.querySelector(".embla--left .embla__viewport"), direction: "prev" }
  ];

  carousels.forEach((carousel) => {
    const node = carousel.node;
    if (!node) return;

    const slidesContainer = node.closest(".embla").querySelector(".embla__container");
    const slides = Array.from(slidesContainer.querySelectorAll(".embla__slide"));
    const repeatCount = 4;

    if (slides.length <= 1 || !slidesContainer) return;

    const startClones = slides.slice(0, repeatCount).map(slide => slide.cloneNode(true));
    const endClones = slides.slice(-repeatCount).map(slide => slide.cloneNode(true)).reverse();

    slidesContainer.prepend(...endClones);
    slidesContainer.append(...startClones);

    const emblaApi = EmblaCarousel(node, { align: "start", loop: true });
    emblaApi.on("init", () => emblaApi.scrollTo(slides.length * repeatCount, false));

    let scrollInterval;
    const scrollSpeed = 5000;

    const toggleScroll = (start) => {
      if (start) {
        scrollInterval = setInterval(() => {
          carousel.direction === "next" ? emblaApi.scrollNext() : emblaApi.scrollPrev();
        }, scrollSpeed);
      } else {
        clearInterval(scrollInterval);
      }
    };

    toggleScroll(true); 

    const handleMouseEnterLeave = (event) => toggleScroll(event.type === "mouseenter" ? false : true);

    node.addEventListener("mouseenter", handleMouseEnterLeave);
    node.addEventListener("mouseleave", handleMouseEnterLeave);
  });
};

checkCarousel();
