---
title: 帮助翻译
order: 90
---

# 帮助翻译

项目使用 [Vitepress](https://vitepress.dev/)，故可轻松编辑 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 文件和预览结果。你应该有一个 [GitHub](https://github.com/) 账号来创建拉取申请PR。

## 文件结构

项目文件夹的文件和 `.**` 文件夹已经被配置好了，你只用关注文件夹 `docs/` 。

- `.vitepress/`: 网站设置和主题
  - `config.ts`: 主要设置
  - `sidebar.ts`: 侧边栏设置
  - `theme/`: 主题设置
- `components/`: 可用在 Markdown 文件的 Vue.js 组件
- `public/`: 公共资源
- `blog/` `commands/` `faq/` `guides/` `releases/`: 文档网站的内容
- `<locale>/`: 某个语言的翻译，如 `zh-hans/` 代表 `简体中文`
- `index.md`: **主页** 的索引文件。子文件夹中，它的元信息用来控制内容的`标题`和`顺序`。


## 新增一个语言

1. 编辑 `docs/.vitepress/config.ts`，请编辑 `<locale>` 和具体的文字为正确的文本。
    ```ts
    themeConfig:{
      search: {
        options: {
          locales: {
            ...
            // 翻译 <locale> 语言的搜索文字
            "<locale>": {
              translations: {
                button: {
                  buttonText: "",
                  buttonAriaLabel: "",
                },
                modal: {
                  displayDetails: "",
                  backButtonTitle: "",
                  noResultsText: "",
                  resetButtonTitle: "",
                  footer: {
                    selectText: "",
                    navigateText: "",
                    closeText: "",
                  },
                },
              },
            },
          }
      }
    }
    ```
2. 编辑 `docs/.vitepress/config.ts`，请编辑 `<locale>`, `<English/简体中文/...>`和具体的文字为正确的文本。
    ```ts
     locales: {
      ...

      // 覆盖 <locale> 语言的设置
      "<locale>": {
        label: "<English/简体中文/...>",
        lang: "<locale>",
        link: "/<locale>/",
        title: "Advancedfx",
        description:
          "Half-Life Advanced Effects (HLAE) is a tool to enrich Source (mainly CS:GO) engine based movie making.",
        themeConfig: {
          lastUpdated: {
            text: "Last Updated",
          },
          editLink: {
            pattern:
              "https://github.com/advancedfx/afx-doc/edit/master/docs/:path",
            text: "Edit this page on GitHub",
          },
          docFooter: {
            prev: "Previous Page",
            next: "Next Page",
          },
          footer: {
            message: "Made with ❤️ by Advancedfx",
            copyright: "Copyright © 2023-present advancedfx.org",
          },
          nav: [
            { text: "Guides", link: "/<locale>/guides/" },
            { text: "Commands", link: "/<locale>/commands/" },
            { text: "FAQ", link: "/<locale>/faq/" },
            { text: "Blog", link: "/<locale>/blog/" },
            { text: "Releases", link: "/<locale>/releases/" },
            { text: "Download", link: "/<locale>/" }, // TODO: link to download #
          ],
        },
      },
    }
    ```
3. 编辑 `docs/.vitepress/sidebar.ts`，请编辑 `<locale>` 和具体的文字为正确的文本。
    ```ts
    const sidebar = generateSidebar([
      ...

      // 复制之前的内容以修改
      {
        ...common_options,
        scanStartPath: "<locale>",
        resolvePath: "/<locale>/",
        excludeFolders: ["releases", "blog"],
      },
      {
        ...common_options,
        scanStartPath: "<locale>/releases",
        resolvePath: "/<locale>/releases/",
        sortMenusOrderByDescending: true,
      },
      {
        ...common_options,
        scanStartPath: "<locale>/blog",
        resolvePath: "/<locale>/blog/",
        sortMenusOrderByDescending: true,
      },
    ]);
    ```
4. 复制 `blog/` `commands/` `faq/` `guides/` `releases/` 和 `index.md` 到新的 `<locale>` 文件夹。
5. 编辑和翻译。当你准备好了，用 Git 提交和推送修改。
6. 提交拉取请求 PR 来合并你的贡献。

## 翻译新页面

和上面的步骤类似，但这次不用步骤1~3。

在第4步中复制新文件到 `<locale>` 中正确的位置。

## 编辑一个已经存在的页面

如果你发现一个已有的页面需要翻译或者改进，只用点击 `在 GitHub 编辑此页` 并跟随指导。它会和上述5~6步相似。

##  为本站编写 `.md` 的注意事项

Markdown 主要内容之前有一个 `元信息` 部分，`title` 标题会用在侧边栏。 `order` 用于决定页面在侧边栏的顺序。

```markdown
---
title: Get Started
order: 0
---

# Get Started

Yo~✋🏻
```

子文件夹的 `index.md` 设置文件夹/内容组的标题和顺序。

::: warning 警告
所有 `.md` 文件名必须使用**小写下划线** `lower_cased`.
:::

## 本地传达室

1. 安装 [Node.js](https://nodejs.org/) >= 18。
2. 全局安装 **pnpm** : `npm i -g pnpm`
3. Git 克隆仓库并切换到对应目录。
4. 安装包： `pnpm install`
5. 开始测试： `pnpm dev`
6. `CTRL+C` 结束并重新测试出发侧边栏更新。


::: info 信息
查看 `package.json` > `scripts` 获知所有 `pnpm *` 指令。
:::