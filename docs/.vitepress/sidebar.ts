import { generateSidebar } from "vitepress-sidebar";

// Common Options to reduce sidebar config
const common_options = {
  documentRootPath: "/docs",
  useTitleFromFrontmatter: true,
  useTitleFromFileHeading: false,
  sortMenusByFrontmatterOrder: true,
  useFolderTitleFromIndexFile: true,
  collapsed: true,
  collapseDepth: 2,
};

// Auto Sidebar generation config
// https://github.com/jooy2/vitepress-sidebar
const sidebar = generateSidebar([
  {
    ...common_options,
    scanStartPath: "",
    resolvePath: "/",
    // ignore other language folders
    excludeFolders: ["releases", "blog", "zh-hans", "zh-hant"],
  },
  {
    ...common_options,
    scanStartPath: "releases",
    resolvePath: "/releases/",
    sortMenusOrderByDescending: true,
  },
  {
    ...common_options,
    scanStartPath: "blog",
    resolvePath: "/blog/",
    sortMenusOrderByDescending: true,
  },

  // zh-hans: Simplified Chinese
  {
    ...common_options,
    scanStartPath: "zh-hans",
    resolvePath: "/zh-hans/",
    excludeFolders: ["releases", "blog"],
  },
  {
    ...common_options,
    scanStartPath: "zh-hans/releases",
    resolvePath: "/zh-hans/releases/",
    sortMenusOrderByDescending: true,
  },
  {
    ...common_options,
    scanStartPath: "zh-hans/blog",
    resolvePath: "/zh-hans/blog/",
    sortMenusOrderByDescending: true,
  },
  // NOTE: Add more language support
]);

export default sidebar;
