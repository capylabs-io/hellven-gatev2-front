const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    /*
      Looping through all entries, which are observed.
    */
    entries.forEach((entry) => {
      /*
        With this condition, we check whether the element is in the current viewport, 
        respectively if the entry intersects with the viewport.
        If true, then we add the enter class and call the unobserve function.
        Because we don’t have to observe it anymore.
      */
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

export default {
  bind(el) {
    el.classList.add('unactive');
    animatedScrollObserver.observe(el);
  }
}