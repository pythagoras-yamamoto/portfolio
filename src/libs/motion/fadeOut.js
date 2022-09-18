
// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// Custom variant
export const fadeOut = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: 300,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: easing
    }
  }
};