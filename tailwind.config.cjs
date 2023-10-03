module.exports = {
    corePlugins: {
      container: false,
    },
  
    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
      ],
    theme: {
      extend: {
        colors: {
          orangency: "#FD6C43",
          greenncy: "#13362D",
          salmonncy: "#FDE3D7",
        },
        screens: {
          "3xl": "1921px",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
    ],
  };
  