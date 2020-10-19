const colors = {
  greyDarker: "#19191F",
  dark: "#19191F",
  lavender: "#C5D0F4",
  white: "#FFF",
  red: "orangered",
};
// const spacings = [".25rem", ".5rem", "1rem", "2rem", "3rem", "5rem"];

const breakpoints = ["1000px", "1920px"];

export default {
  font: {
    main:
      "degular, -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  },
  colors: {
    ...colors,
    fg: colors.white,
    bg: colors.greyDarker,
    dark: colors.greyDarker,
    link: colors.lavender,
  },
  sizes: {
    unit: "3.5rem",
  },
  // space: [...spacings],
  space: ["0", ".5rem", "1rem", "2rem", "3.5rem"],
  breakpoints: [...breakpoints],
  bp: [`(min-width: ${breakpoints[0]})`],
  fontSizes: [13, 16, 19, 23, 27, 33, 39, 47],
  fluidFontSizes: {
    navBar: ["12px", "16px", "20px"],
    body: ["16px", "18px", "24px"],
    h1: ["40px", "60px", "160ppx"],
  },
  zIndexes: {
    navBar: 10,
    navFull: 11,
  },
};
