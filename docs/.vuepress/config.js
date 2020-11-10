const head = require('../../config/headconfig.js')
const plugins = require('../../config/pluginconfig.js')
const nav = require('../../config/navconfig.js')

module.exports = {
    title: 'xiaohuamao',
    description: 'Just playing around',
    head: head,
    plugins: plugins,
    base: '/',
    themeConfig: { //主题配置
        repo: 'xiaohuamao93/myBlog',
        docsDir: 'docs',
        editLinks: true,
        sidebar: {
            '/guide/day/': [
                '',
            ],
            '/guide/audition/': [
                '',
                'xiaoying',
                'nodejs'
            ],
            '/server/': [
                '',
                'nginx',
                'jenkins',
                'tomcat',
                'vim',
                'pm2',
                'ip'
            ],
            '/git/': [
                ''
            ]
        },
        // editLinkText: '编辑！',
        lastUpdated: '上次更新', // string | boolean
        nav: nav
    }
}
