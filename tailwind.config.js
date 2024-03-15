/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
				primary: "#8E00C9",
				secondary: "#00B7A4"
      },
			backgroundImage: {
				gradient: "linear-gradient(0deg, rgba(0,183,164,0.9668242296918768) 0%, rgba(142,0,201,1) 100%);",
			}
    },
  },
  plugins: [],
};
