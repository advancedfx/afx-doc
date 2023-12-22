import { DefaultTheme } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

const sidebar = generateSidebar([
  {
    documentRootPath: "/docs",
    scanStartPath: "",
    resolvePath: "/",
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: false,
    sortMenusByFrontmatterOrder: true,
    useFolderTitleFromIndexFile: true,
    collapsed: false,
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
    collapseDepth: 2,
  },
  // NOTE: Add more language support
]);

export default sidebar;
