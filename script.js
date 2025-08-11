gsap.registerPlugin(ScrollTrigger);

// This creates a single timeline for the entire animation.
const zoomTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".spacer",
    start: "top top",
    end: "bottom top",
    scrub: true,
  }
});

// A small text fade-in at the very beginning
zoomTimeline.to("#text1", {
  opacity: 1,
  duration: 0.1
});

// --- Scene 1: Image 1 zooms, then Image 2 fades in ---
zoomTimeline.to("#image1", {
  backgroundSize: "200%", // Zooms in
  duration: 1
})
.to("#text1", {
  opacity: 0,
  duration: 0.1
}, "-=0.2") // Start this a bit before the end of the previous animation
.to("#image2", {
  opacity: 1,
  backgroundSize: "150%", // Fades in and starts a slight zoom
  duration: 1
}, "-=0.8") // Starts during the zoom of image1

// --- Scene 2: Image 2 continues zoom, Image 3 fades in ---
.to("#image2", {
  backgroundSize: "250%", // Zooms in further
  duration: 1
})
.to("#text2", {
  opacity: 1,
  duration: 0.1
}, "-=0.2")
.to("#image3", {
  opacity: 1,
  backgroundSize: "150%",
  duration: 1
}, "-=0.8")

// --- Scene 3: Image 3 continues zoom, Image 4 fades in ---
.to("#image3", {
  backgroundSize: "250%",
  duration: 1
})
.to("#text3", {
  opacity: 1,
  duration: 0.1
}, "-=0.2")
.to("#image4", {
  opacity: 1,
  backgroundSize: "150%",
  duration: 1
}, "-=0.8")

// --- Scene 4: Image 4 continues zoom, fade out all ---
.to("#image4", {
  backgroundSize: "250%",
  duration: 1
})
.to("#text4", {
  opacity: 1,
  duration: 0.1
}, "-=0.2")
.to("#image4", {
  opacity: 0,
  duration: 1
})
.to("#text4", {
  opacity: 0,
  duration: 0.5
}, "-=1")
