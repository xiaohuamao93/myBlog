module.exports = [
    { text: '首页', link: '/' },
    { text: '笔记', link: '/guide/' },
    {
        text: '前端', items: [
            { text: 'Vue', link: '/front/vue/' },
            { text: 'React', link: '/front/react/' },
            { text: 'Angular', link: '/front/angular/' },
            { text: 'css', link: '/front/css/' },
        ]
    },
    {
        text: 'node相关', items: [
            { text: 'Java', link: '/backend/java/' },
        ]
    },
    {
        text: '服务器部署', items: [
            { text: 'MySQL', link: '/database/mysql/'},
        ]
    },
    {
        text: 'git', items: [
            { text: 'Git', link: '/tools/git/' },
        ]
    },
    {
        text: '其它', items: [
            { text: 'CICD', link: '/others/cicd/'},
            { text: 'Issues', link: '/others/issues/' },
        ]
    }
]
