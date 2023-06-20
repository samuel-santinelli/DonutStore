module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      green: {
        100: '#417b34',
        200: '#316627',
        300: '#20521a',
        400: '#103e0d',
        500: '#002a00'
      },
      blue: {
        200: '#62a4ab',
      },
      white: '#fff'
    },
    fontFamily: {
      normal: ['sans-serif'],
      shlop: ['Shlop', 'sans-serif'],
      schwifty: ['Schwifty', 'sans-serif']
    },
    screens: {
      mobile: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024) { ... }
    },
    fontSize: {
      xs: "12px",
      pp: "14px",
      sm: "16px",
      18: "18px",
      20: "20px",
      xl: "28px",
      24: "24px",
      22: "22px"
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}