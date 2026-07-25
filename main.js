
    // Scroll reveal for project sheets
    const sheets = document.querySelectorAll('.sheet');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('in-view'), i * 60);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      sheets.forEach(s => observer.observe(s));
    } else {
      sheets.forEach(s => s.classList.add('in-view'));
    }