document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded',()=>{
  const progressBar=document.createElement('div');
  progressBar.id='brewing-progress-bar';
  progressBar.setAttribute('aria-hidden','true');
  document.body.appendChild(progressBar);
  const updateProgress=()=>{
    const scrollable=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const percent=scrollable>0?(document.documentElement.scrollTop/scrollable)*100:0;
    progressBar.style.width=`${Math.min(100,Math.max(0,percent))}%`;
  };
  window.addEventListener('scroll',updateProgress,{passive:true});
  window.addEventListener('resize',updateProgress);
  updateProgress();

  const revealItems=document.querySelectorAll('.page-heading,.nav-links,.layout>.panel,.receipt-wrap,#records-section');
  revealItems.forEach(item=>item.classList.add('reveal-on-scroll'));
  if('IntersectionObserver'in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
    }),{threshold:.08});
    revealItems.forEach(item=>observer.observe(item));
  }else{
    revealItems.forEach(item=>item.classList.add('is-visible'));
  }
});
