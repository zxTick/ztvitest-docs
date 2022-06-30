import { defineConfig } from "vitepress";

export default defineConfig({
  title: "学习Vitest",
  description: "a framework to help you create your own canvas application",
  lastUpdated: true,
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/logo.png",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Tick Wu and Alex Zhang",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/zxTick/ztvitest-docs" },
    ],
    editLink: {
      pattern: "https://github.com/zxTick/ztvitest-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: [
      {
        text: "介绍",
        items: [
          { text: "介绍", link: "../introduce/index.md" },
        ],
      },
      {
        text: "版本",
        items: [
          { text: "v0.0.1", link: "../version/0.0.1.md" },
          { text: "v0.0.10", link: "../version/0.0.10.md" },
        ],
      },
    ],
  },
});
