function init() {
    import("./global.js");
    /*import("./loader.js");*/
    import("./header.js");
    import("./galery.js");
}

const totalPartials = document.querySelectorAll(
    '[hx-trigger="load"], [data-hx-trigger="load"]'
  ).length;
  let loadedPartialsCount = 0;
  
  document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
  });