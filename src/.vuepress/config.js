module.exports = {
  title: "site title",
  description: 'site description',
  themeConfig: {
    locales: {
      "/": {
        lang: "ja"
      }
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "AboutMe", link: "/About_me/" },
      { text: "Posts", link: "/Posts/" },
      {
        text: "SNS",
        items: [
          { text: "Twitter", link: "https://twitter.com/" },
          { text: "Instagram", link: "https://www.instagram.com/" },
          { text: "GitHub", link: "https://github.com/" }
        ]
      }
    ],
    sidebar: [["/", "Home"], ["/About_me/", "About"]],
    sidebarDepth: 2
  }
};
