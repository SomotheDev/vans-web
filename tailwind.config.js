/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'simple-selected': '#E17654', // Change the color as per your requirement
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['simple-selected'],
    }
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('simple-selected', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`simple-selected${separator}${className}`)}::selection`;
        });
      });
    }
  ]
}