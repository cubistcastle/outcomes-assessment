

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Roboto",
        '"Inter"',
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      // here we have some brand colors from the design file.
      colors: {
        brandgreen: {
          200: "#BFF3FD",
        },
        maroon: {
          700: "#7A2026",
          800: "#501214",
          900: "#340507",
          950: "#330507",
        },
        turquoise: {
          600: "#096190",
          700: "#063F5E",
          800: "#00507a",
          900: "#063f5e",
        },
        "focus-blue": "#3DBBDB",
        "outline-blue": "#3DBBDB",
      },
      boxShadow: {
        primary: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        "space-3xs": "clamp(0.31rem, calc(0.31rem + 0vw), 0.31rem)",
        "space-2xs": "clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)",
        "space-xs": "clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)",
        "space-s": "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
        "space-m": "clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)",
        "space-l": "clamp(2.25rem, calc(2.16rem + 0.43vw), 2.5rem)",
        "space-xl": "clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)",
        "space-2xl": "clamp(4.5rem, calc(4.33rem + 0.87vw), 5rem)",
        "space-3xl": "clamp(6.75rem, calc(6.49rem + 1.3vw), 7.5rem)",
        "space-3xs-2xs": "clamp(0.31rem, calc(0.2rem + 0.54vw), 0.63rem)",
        "space-2xs-xs": "clamp(0.56rem, calc(0.43rem + 0.65vw), 0.94rem)",
        "space-xs-s": "clamp(0.88rem, calc(0.74rem + 0.65vw), 1.25rem)",
        "space-s-m": "clamp(1.13rem, calc(0.86rem + 1.3vw), 1.88rem)",
        "space-m-l": "clamp(1.69rem, calc(1.4rem + 1.41vw), 2.5rem)",
        "space-l-xl": "clamp(2.25rem, calc(1.73rem + 2.61vw), 3.75rem)",
        "space-xl-2xl": "clamp(3.38rem, calc(2.81rem + 2.83vw), 5rem)",
        "space-xl-2xl": " clamp(4.5rem, calc(3.46rem + 5.22vw), 7.5rem)",
      },
      fontSize: {
        "step--2": "clamp(0.7rem, calc(0.73rem + -0.03vw), 0.72rem)",
        "step--1": "clamp(0.9rem, calc(0.89rem + 0.07vw), 0.94rem)",
        "step-0": "clamp(1.25rem, calc(1.25rem + 0vw), 1.25rem)",
        "step-1": "clamp(1.41rem, calc(1.32rem + 0.45vw), 1.67rem)",
        "step-2": "clamp(1.76rem, calc(1.6rem + 0.81vw), 2.22rem)",
        "step-3": "clamp(2.2rem, calc(1.93rem + 1.33vw), 2.96rem)",
        "step-4": "clamp(2.75rem, calc(2.33rem + 2.09vw), 3.95rem)",
        "step-5": "clamp(3.43rem, calc(2.8rem + 3.18vw), 5.26rem)",
        "step-6": "clamp(4.29rem, calc(3.34rem + 4.73vw), 7.01rem)",
        "step-7": "clamp(5.36rem, calc(3.98rem + 6.93vw), 9.35rem)",
        "step-8": "clamp(6.71rem, calc(4.7rem + 10.01vw), 12.46rem)",
      },
    },
  },
  plugins: [],
};
