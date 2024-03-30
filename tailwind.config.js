/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily:{Inknut: 'Inknut Antiqua'
      },

      height: { lx: "38rem", ly:"18rem" ,lz: "38rem", la:"25rem", lb:"35.5rem", lc:"38rem"}, 
    
    },
  },
  plugins: [ require('flowbite/plugin')],
}

