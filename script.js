gsap.registerPlugin(ScrollTrigger);

gsap.to("#bg1", {
  scale: 3,
  scrollTrigger: {
    trigger: ".spacer",
    start: "top top",
    end: "20% top",
    scrub: true
  }
});

gsap.to("#zoom1", {
  opacity: 1,
  scale: 1.2,
  scrollTrigger: {
    trigger: ".spacer",
    start: "20% top",
    end: "40% top",
    scrub: true
  }
});

gsap.to("#bg1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".spacer",
    start: "20% top",
    end: "40% top",
    scrub: true
  }
});

gsap.to("#text1", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".spacer",
    start: "25% top",
    end: "35% top",
    scrub: true
  }
});

gsap.to("#zoom1", {
  scale: 4,
  scrollTrigger: {
    trigger: ".spacer",
    start: "40% top",
    end: "60% top",
    scrub: true
  }
});

gsap.to("#zoom1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".spacer",
    start: "60% top",
    end: "80% top",
    scrub: true
  }
});

gsap.to("#zoom2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".spacer",
    start: "60% top",
    end: "80% top",
    scrub: true
  }
});

gsap.to("#text1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".spacer",
    start: "60% top",
    end: "80% top",
    scrub: true
  }
});

gsap.to("#text2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".spacer",
    start: "60% top",
    end: "80% top",
    scrub: true
  }
});
