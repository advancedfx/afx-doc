module.exports = {
  content: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./docs/.vitepress/**/*.js",
      "./docs/.vitepress/**/*.vue",
      "./docs/.vitepress/**/*.ts",
      "./src/**/*.vue",
    ],
    options: {
      safelist: ["html", "body"],
    },
  },
};
