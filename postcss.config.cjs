const openProps = require("open-props");

module.exports = {
  plugins: [
    require("postcss-custom-media"),
    require("tailwindcss/nesting"),
    require("postcss-jit-props")(openProps),
  ],
};
