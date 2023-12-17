export const scrollFade = () => {
  const targets = document.getElementsByClassName("fade");

  for (let i = targets.length; i--; ) {
    let observer = new IntersectionObserver((entries, observer) => {
      for (let j = entries.length; j--; ) {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add("active");
          observer.unobserve(entries[j].target);
        }
      }
    });

    observer.observe(targets[i] as Element);
  }
};
