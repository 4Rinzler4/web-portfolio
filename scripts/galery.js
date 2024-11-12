const checkCarousel = () => {
  const carouselRightNode = document.querySelector(".embla--right .embla__viewport");
  const carouselLeftNode = document.querySelector(".embla--left .embla__viewport");

  const slidesRightContainer = document.querySelector(".embla--right .embla__container");
  const slidesLeftContainer = document.querySelector(".embla--left .embla__container");

  const slidesRight = Array.from(document.querySelectorAll(".embla--right .embla__slide"));
  const slidesLeft = Array.from(document.querySelectorAll(".embla--left .embla__slide"));

  if (carouselRightNode && carouselLeftNode && slidesRightContainer && slidesLeftContainer && slidesRight.length > 1 && slidesLeft.length > 1) {
    const repeatCount = 4;

    for (let i = 0; i < repeatCount; i++) {
      const startClonesRight = slidesRight.map((slide) => slide.cloneNode(true));
      const endClonesRight = slidesRight.map((slide) => slide.cloneNode(true)).reverse();

      endClonesRight.forEach((clone) =>
        slidesRightContainer.insertBefore(clone, slidesRightContainer.firstChild)
      );
      startClonesRight.forEach((clone) => slidesRightContainer.appendChild(clone));

      const startClonesLeft = slidesLeft.map((slide) => slide.cloneNode(true));
      const endClonesLeft = slidesLeft.map((slide) => slide.cloneNode(true)).reverse();

      endClonesLeft.forEach((clone) =>
        slidesLeftContainer.insertBefore(clone, slidesLeftContainer.firstChild)
      );
      startClonesLeft.forEach((clone) => slidesLeftContainer.appendChild(clone));
    }

    const options = { align: "start", loop: true };

    const emblaRightApi = EmblaCarousel(carouselRightNode, options);
    const emblaLeftApi = EmblaCarousel(carouselLeftNode, options);

    emblaRightApi.on("init", () => {
      emblaRightApi.scrollTo(slidesRight.length * repeatCount, false);
    });
    emblaLeftApi.on("init", () => {
      emblaLeftApi.scrollTo(slidesLeft.length * repeatCount, false);
    });

    const scrollSpeed = 1; 

    
    const startContinuousScrollRight = () => {
      const scrollRight = () => {
        emblaRightApi.scrollBy(scrollSpeed, true); 
        requestAnimationFrame(scrollRight);
      };
      requestAnimationFrame(scrollRight);
    };

    const startContinuousScrollLeft = () => {
      const scrollLeft = () => {
        emblaLeftApi.scrollBy(-scrollSpeed, false);
        requestAnimationFrame(scrollLeft);
      };
      requestAnimationFrame(scrollLeft);
    };

    startContinuousScrollRight();
    startContinuousScrollLeft();

    setInterval(() => {
      startContinuousScrollRight();
      startContinuousScrollLeft();
    }, 400); 
  } else {
    setTimeout(checkCarousel, 100);
  }
};

checkCarousel();