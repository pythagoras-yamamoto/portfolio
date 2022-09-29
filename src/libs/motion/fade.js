// Our custom easing
export const easing = [0.6, -0.05, 0.01, 0.99];

// animation using framer motion 
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

export const fadeSide = {
  initial: {
    x: 1500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing
    }
  },
  exit: {
    x: -3000, 
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: easing
    }
  },
}