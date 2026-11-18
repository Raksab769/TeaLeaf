document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.createElement("div");
  progressBar.id = "brewing-progress-bar";
  document.body.appendChild(progressBar);
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + "%";
  });
  const scrollElements = document.querySelectorAll(".reveal-on-scroll, .product-card");
  const elementInView = (el, dividend = 1.2) => el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  const handleScrollAnimation = () => scrollElements.forEach(el => { if (elementInView(el, 1.25)) el.classList.add("is-visible") });
  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    for (let i=0;i<5;i++) {
      const leaf=document.createElement("div");leaf.className="floating-leaf";leaf.innerHTML="🌿";leaf.style.left=`${Math.random()*100}%`;leaf.style.top=`${-20-Math.random()*20}%`;leaf.style.fontSize=`${14+Math.random()*16}px`;leaf.style.animationDuration=`${6+Math.random()*6}s`;leaf.style.animationDelay=`${Math.random()*5}s`;heroSection.appendChild(leaf);
    }
  }
});
