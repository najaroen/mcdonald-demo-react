// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/app/**/*.{js,ts,jsx,tsx}', // for Next.js 13+ app directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB300",
      },
      fontFamily: {
        poppins: ["PoppinsMedium", "sans-serif"],
      },
    },
  },
};
