import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
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
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    "zh-hans": {
      label: "简体中文",
      lang: "zh-hans",
      link: "/zh-hans/",
    },
  },
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo2009.svg",
    i18nRouting: true,
    editLink: {
      pattern: "https://github.com/advancedfx/afx-doc/master/docs/:path",
      text: "Edit this page on GitHub",
    },

    nav: [
      { text: "Guides", link: "/guides/" },
      { text: "Tutorials", link: "/tutorials/" },
      { text: "FAQ", link: "/faq/" },
      { text: "Blog", link: "/blog/" },
      { text: "Releases", link: "/releases/" },
      { text: "Download", link: "/" }, // TODO: link to download #
    ],

    // @ts-ignore
    sidebar: generateSidebar([
      {
        documentRootPath: "/docs",
        scanStartPath: "",
        resolvePath: "/",
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        sortMenusByFrontmatterOrder: true,
        useFolderTitleFromIndexFile: true,
        collapsed: true,
        rootGroupCollapsed: false,
        collapseDepth: 2,
        // ignore other language folders
        excludeFolders: ["zh-hans", "zh-hant"],
      },
      {
        documentRootPath: "/docs",
        scanStartPath: "zh-hans",
        resolvePath: "/zh-hans/",
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        sortMenusByFrontmatterOrder: true,
        useFolderTitleFromIndexFile: true,
        collapsed: true,
        rootGroupCollapsed: false,
        collapseDepth: 2,
      },
    ]),

    socialLinks: [
      { icon: "github", link: "https://github.com/advancedfx/advancedfx" },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          // Search texts for other languages
          "zh-hans": {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                displayDetails: "显示详情",
                backButtonTitle: "返回",
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
          // "zh-hant": {},
        },
      },
    },
  },

  vite: {},
});
