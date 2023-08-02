/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "light-blue": "#ebf3fd",
    "hard-blue": "#005DEE",
    "sky-blue": "#E5EFFD",
    "easy-blue": "#005EEF",
    "new-blue": "#F5F5F5",
    black: "#000000",
    "light-green": "#00A889",
    "dull-light-blue": "#E5EFFD",
    "dull-black": "#395283",
    white: "#fff",
    red: "#F43D4F",
    yellow: "#FFCD2A",
    purple: "#893BDC",
    green: "#00D7C4",
    "medium-gray": "#508AC1",
    "medium-blue": "#040B8F",
    "container-blue": "#111796",
    "lighter-blue": "#3F44A9",
    "pin-blue": "#DEEBFC",
    "off-white": "#f5f5f5",
    live: "#00E418",
    approved: "#00AF30",
    filter: "#395283",
    "easy-gray": "#395283",
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: colors,
    screens: {
      sms: "900px",
      mds: "1200px",
      lgs: "1700px",
    },
  },
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  plugins: [],
};
