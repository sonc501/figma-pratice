/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manjari: ['Manjari', 'sans-seri'],
        Nunito: ['Nunito', 'sans-seri']
      },
      maxWidth: {
        'max-screen': '1440px',
      },
      colors: {
        'do': '#D93F1D',
        'den': '#074F63',
        'xam': '#808080',
        'bg': '#E5E5E5',
        '#007893': '#007893',
        '#074F6380': '#074F6380',
        '074F63': '#074F63',
        '#18C4EE': '#18C4EE',
        '#FFFFFF': '#FFFFFF',
        '#F3F3F3': '#F3F3F3',
        '#AEAEAE': '#AEAEAE',
        '#E5E5E5': ' #E5E5E5',
        '8FADB5': '#8FADB5'

      },
      borderRadius: {
        'large': '80px',

      },
      lineHeight: {
        '0.1em': ' 0.1em',
        '26.37': '26.37px',
        '19.78': '19.78px',

      },
      spacing: {
        '2px': '2px',
        '572': '572px',
        '36': '36px',
        '64': '64px',
        '178px': '178px',
        '234': '234px',
        '972': '972px',
        '480': '480px',
        '85': '85px',
        '102': '102px',
        '268': '268px',
        '288': '288px',
        '105px': '105px',
        '271': '271px',
        '656': '656px',
        '150': '150px',
        '350': '350px',
        '400': '400px',
        '772': '772px',
        '702': '702px',

        'behind': '-1',

      },
      zIndex: {
        'behind': '-1',
      },
      inset: {
        '50%': '50%',
      }
    },
  },
  plugins: [],
}