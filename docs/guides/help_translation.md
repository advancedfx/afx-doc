---
title: Help Translation
order: 90
---

# Help Translation

The project is built using [Vitepress](https://vitepress.dev/), thus it's ok to edit [Markdown](https://zh.wikipedia.org/wiki/Markdown) files and preview the results easily. You should have a [GitHub](https://github.com/) account to create pull requests (PRs).

## Folder Structure

Files and `.**` folders in the project directory have already been configured properly. You should focus on `docs/` folder.

- `.vitepress/`: The config and theme of the site
  - `config.ts`: Main config
  - `sidebar.ts`: Sidebar config
  - `theme/`: Theme config
- `components/`: Vue.js components that can be used in Markdown files
- `public/`: public assets
- `blog/` `commands/` `faq/` `guides/` `releases/`: Content of the document site
- `<locale>/`: Translation of a locale, such as `zh-hans/` represents `Simplified Chinese`
- `index.md`: Index file for the **Home Page**. In sub-folders, its metadata controls the `title`, `order` ... of the content.


## Add a new locale

1. Edit `docs/.vitepress/config.ts`, please edit `<locale>` and specific texts to correct ones.
    ```ts
    themeConfig:{
      search: {
        options: {
          locales: {
            ...
            // Translate Search Texts for the <locale>
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
2. Edit `docs/.vitepress/config.ts`, please edit `<locale>`, `<English/简体中文/...>`, and specific texts to correct ones.
    ```ts
     locales: {
      ...

      // Override Config for the <locale>
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
3. Edit `docs/.vitepress/sidebar.ts`, please edit `<locale>` to the correct one.
    ```ts
    const sidebar = generateSidebar([
      ...

      // Duplicate Previous Ones to modify
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
4. Duplicate `blog/` `commands/` `faq/` `guides/` `releases/` and `index.md` to a new `<locale>` folder.
5. Do edit and translation. Git Commit and push when you are ready.
6. Create a Pull Request to merge your contribution.

## Translate new pages

Similar to above steps, but this time without step 1~3.

In step 4, copy new files to the correct path in `<locale>` folder.


## Edit a existed page

If you see a existed page that need translation or improvement, simply click `Edit this page on GitHub` and follow the instructions. It would be like the above step 5~6.

## Notice on writing `.md` for the site

Before the Main content of markdown, we have a `metadata` section. `title` will be used in the sidebar. `order` will be used to determine the order of pages in the sidebar.

```markdown
---
title: Get Started
order: 0
---

# Get Started

Yo~✋🏻
```

`index.md` in subfolders configures the title and order of the folder/group of content.

::: warning
All `.md` file names must be `lower_cased`.
:::

## Test Locally

1. Install [Node.js](https://nodejs.org/) >= 18.
2. Install **pnpm** globally: `npm i -g pnpm`
3. Git clone the repository and change to the directory.
4. Install packages: `pnpm install`
5. Start Testing: `pnpm dev`
6. `CTRL+C` quit and re-dev triggers sidebar updates.


::: info
Checkout `package.json` > `scripts` to view all `pnpm *` commands.
:::