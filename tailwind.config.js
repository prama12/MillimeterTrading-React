module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#38B6FF",
          dark_body: "#04153F",
        },
        event_gradient: {
          light_from: "#38b6ff1a 0.07%",
          light_to: "#ffffff 99.93%",
          dark_from: "#04153f69 0.07%",
          dark_via: "#38b6ff73 46.88%",
          dark_to: "#04153f 99.93%",
        },
      },

      fontFamily: {
        mont: ["Mont"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        line: "line 1s cubic-bezier(0.61, 1, 0.88, 1) 1s 1 normal backwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        line: {
          "0%": {
            opacity: " 0",
            transform: "translateX(-250px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
    plugins: [],
  },
  plugins: [],
};