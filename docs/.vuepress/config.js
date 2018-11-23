module.exports = {
    title: 'vuepress',
    description: 'vuepress-template',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }]
    ],
    dest: './dist',
    themeConfig: {
        lastUpdated: '上次更新',
        repo: 'Nick233333/vuepress-template',
        repoLabel: 'GitHub',
        nav: [
            { text: '导航栏一', link: '/' },
            { text: '导航栏二', link: '/html/' },
            { text: '导航栏三', link: '/css/' },
            { 
                text: '导航栏四', 
                items: [
                    { text: 'test', link: '/test/test.md' },
                ] 
            },
        ],
        sidebar: [
            {
                title: '侧边栏一',
                collapsable: false,
                children: [
                    '/css/',
                    '/css/1.md'
                ]
            },
            {
                title: '侧边栏二',
                collapsable: false,
                children: [ 
                    '/html/',
                    '/html/1.md'
                ]
            },
            {
                title: '侧边栏三',
                collapsable: false,
                children: [ 
                    '/js/',
                    '/js/1.md'
                ]
            },
        ]
    }
}