
// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// Custom variant
export const fadeIn = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 1, ease: easing }
  },
  exit: {
    y: -50, 
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: easing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing
    }
  }

};