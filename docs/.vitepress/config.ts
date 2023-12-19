import { defineConfig } from "vitepress";
// @ts-ignore
import { resolve } from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Advancedfx",
  description:
    "Half-Life Advanced Effects (HLAE) is a tool to enrich Source (mainly CS:GO) engine based movie making.",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg",
        href: "/logo2009.svg",
      },
    ],

    // [
    //   "link",
    //   {
    //     rel: "stylesheet",
    //     href: "https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css",
    //   },
    // ],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    "zh-hans": {
      label: "简体中文",
      lang: "zh-hans",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo2009.svg",

    nav: [
      { text: "Guides", link: "/guides" },
      { text: "Tutorials", link: "/tutorials" },
      { text: "FAQ", link: "/faq" },
      { text: "Blog", link: "/blog" },
      { text: "Releases", link: "/releases" },
      { text: "Download", link: "/" }, // TODO: link to download #
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/advancedfx/advancedfx" },
    ],
  },

  vite: {
    resolve: {
      alias: {
        // @ts-ignore
        "@": resolve(__dirname, "src"),
      },
    },
  },
});
