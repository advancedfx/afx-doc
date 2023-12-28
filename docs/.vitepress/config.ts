import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// @ts-ignore
import { resolve } from "path";
import sidebar from "./sidebar";

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
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo2009.svg",
    i18nRouting: true,
    editLink: {
      pattern: "https://github.com/advancedfx/afx-doc/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Made with ❤️ by Advancedfx",
      copyright: "Copyright © 2023-present xxx",
    },

    nav: [
      { text: "Guides", link: "/guides/" },
      { text: "Commands", link: "/commands/" },
      { text: "FAQ", link: "/faq/" },
      { text: "Blog", link: "/blog/" },
      { text: "Releases", link: "/releases/" },
      { text: "Download", link: "/" }, // TODO: link to download #
    ],

    // @ts-ignore
    sidebar: sidebar,

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/advancedfx/advancedfx",
        ariaLabel: "GitHub",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-pull-request" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M6 8l0 8" /><path d="M11 6h5a2 2 0 0 1 2 2v8" /><path d="M14 9l-3 -3l3 -3" /></svg>',
        },
        link: "https://github.com/advancedfx/afx-doc",
        ariaLabel: "Doc Project",
      },
      {
        icon: "discord",
        link: "https://discord.gg/e7sgYQcR",
        ariaLabel: "Discord",
      },
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
          // NOTE: Add more language support
          // "zh-hant": {},
        },
      },
    },
  },

  // i18n
  locales: {
    root: {
      label: "English",
      lang: "en",
    },

    // Override Config for Chinese Simplified locale
    "zh-hans": {
      label: "简体中文",
      lang: "zh-hans",
      link: "/zh-hans/",
      title: "Advancedfx",
      description:
        "Half-Life Advanced Effects (HLAE) is a tool to enrich Source (mainly CS:GO) engine based movie making.",
      themeConfig: {
        lastUpdated: {
          text: "上次更新",
        },
        editLink: {
          pattern:
            "https://github.com/advancedfx/afx-doc/edit/master/docs/:path",
          text: "在 GitHub 上编辑此页",
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        footer: {
          message: "Made with ❤️ by Advancedfx",
          copyright: "Copyright © 2023-present advancedfx.org",
        },
        nav: [
          { text: "指南", link: "/zh-hans/guides/" },
          { text: "指令", link: "/zh-hans/commands/" },
          { text: "常见问题", link: "/zh-hans/faq/" },
          { text: "博客", link: "/zh-hans/blog/" },
          { text: "发布", link: "/zh-hans/releases/" },
          { text: "下载", link: "/zh-hans/" }, // TODO: link to download #
        ],
      },
    },

    // NOTE: Add more language support

    // Override Config for Chinese Traditional locale
    // "zh-hant": {},
  },

  vite: {},
});
