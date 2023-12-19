import { defineConfig } from "vitepress";
// @ts-ignore
import { resolve } from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Advancedfx",
  description:
    "Half-Life Advanced Effects (HLAE) is a tool to enrich Source (mainly CS:GO) engine based movie making.",
  head: [
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
    fr: {
      label: "French",
      lang: "fr", // optional, will be added  as `lang` attribute on `html` tag
      link: "/fr/guide", // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
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
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
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
