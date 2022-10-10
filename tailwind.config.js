/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e5b7f",

          secondary: "#d2e810",

          accent: "#e5b264",

          neutral: "#1B1E22",

          "base-100": "#F7F7F8",

          info: "#57A5C7",

          success: "#4DDB96",

          warning: "#DA810B",

          error: "#FC4557",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
