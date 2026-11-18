document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Brewing Progress Bar Scroll Listener
  const progressBar = document.createElement("div");
  progressBar.id = "brewing-progress-bar";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });


  // 2. Scroll-Triggered Reveal (Intersection Observer)
  const scrollElements = document.querySelectorAll(".reveal-on-scroll, .product-card");

  const elementInView = (el, dividend = 1.2) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("is-visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
  // Trigger once on load in case elements are already in view
  handleScrollAnimation();


  // 3. Dynamic Ambient Floating Leaves Generator
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    const leafCount = 5;
    for (let i = 0; i < leafCount; i++) {
      const leaf = document.createElement("div");
      leaf.className = "floating-leaf";
      leaf.innerHTML = `🌿`; // Or use an SVG/img element
      leaf.style.left = `${Math.random() * 100}%`;
      leaf.style.top = `${-20 - Math.random() * 20}%`;
      leaf.style.fontSize = `${14 + Math.random() * 16}px`;
      leaf.style.animationDuration = `${6 + Math.random() * 6}s`;
      leaf.style.animationDelay = `${Math.random() * 5}s`;
      heroSection.appendChild(leaf);
    }
  }

});