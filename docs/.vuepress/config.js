const head = require('../../config/headconfig.js')
const plugins = require('../../config/pluginconfig.js')
const nav = require('../../config/navconfig.js')

module.exports = {
    title: '个人笔记',
    description: 'Just playing around',
    head: head,
    plugins: plugins,
    base: '/myBlog/',
    themeConfig: { //主题配置
        repo: 'xiaohuamao93/myBlog',
        docsDir: 'docs',
        editLinks: true,
        sidebar: 'auto',
        // editLinkText: '编辑！',
        lastUpdated: '上次更新', // string | boolean
        nav: nav
    }
}
