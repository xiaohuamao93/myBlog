module.exports = [
  { text: "首页", link: "/" },
  {
    text: "笔记",
    items: [
      { text: "日常记录", link: "/guide/day/" },
      { text: "面试题", link: "/guide/audition/" },
      { text: "浏览器", link: "/guide/browser/" },
      { text: "webpack", link: "/guide/webpack/" },
    ],
  },
  {
    text: "前端",
    items: [
      { text: "Vue", link: "/front/vue/" },
      { text: "React", link: "/front/react/" },
      { text: "Angular", link: "/front/angular/" },
      { text: "css", link: "/front/css/" },
    ],
  },
  {
    text: "node",
    link: "/node/",
  },
  {
    text: "服务器部署",
    link: "/server/",
  },
  {
    text: "git",
    link: "/git/",
  },
  {
    text: "其它",
    items: [
      { text: "CICD", link: "/others/cicd/" },
      { text: "Issues", link: "/others/issues/" },
    ],
  },
];
