export const fadeInUp = {
  offScreen: { y: 50, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const fadeInLeft = {
  offScreen: { x: -50, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const fadeInRight = {
  offScreen: { x: 50, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const bounceInRight = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 5, -5, 5, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export const scaleInUp = {
  offScreen: { scale: 0.9, y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const fadeIn = {
  offScreen: { opacity: 0 },
  onScreen: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
