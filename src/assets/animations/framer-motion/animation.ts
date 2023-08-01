export const fadeIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
  ) => {
    return {
      hidden: {
        x: direction === "left" ? "100px" : direction === "right" ? "-100px" : 0,
        y: direction === "up" ? "100px" : direction === "down" ? "-100px" : 0,
        opacity: 0,
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
        }
      },
    };
  };