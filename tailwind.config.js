/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        links: "#c4c4c4",
        linksBack: "#262626",
        text: "#B8B8B8",
        cursor: "#7565d4",
        scroll: "#151515",
      },
      width: {
        text: "500px",
        phrase: "600px",
      },
      height: {
        projects: "668px",
        secOneMd: "1263px",
      },
    },
  },
  plugins: [],
};
