module.exports = {
  purge: ["./index.html", "./src/**/*{.vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: "#F3D7C8",
        body: "#FDF6E7",
        footer: "#F3D7C8",
        open: {
          DEFAULT: "#FD591F",
          dark: "#FF1100",
        }, ///////Hamburger button
        text: {
          DEFAULT: "#075063",
          dark: "#05333F",
        },
        button: {
          light: "#C7DFDB",
          DEFAULT: "#A7BCB9",
          dark: "#86A7A2",
        },
        // backgroundImage: {
        //   "b-normal": "url('./buttons/bookmark_default.png')",
        //   "b-pressed": "url('./buttons/bookmark_pressed.png')",
        //   "b-selected": "url('./buttons/bookmark_selected.png')",
        // },
      },
      boxShadow: {
        plus: "0px 0px 11px 3px rgba(253,89,31,0.25)",
      },
      minWidth: {
        12: "3rem",
        24: "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
