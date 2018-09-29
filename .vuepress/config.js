module.exports = {
    title: 'vuepress',
    description: 'vuepress-template',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }]
    ],
    base: '/docs/',
    dest: './dist',
    themeConfig: {
        lastUpdated: '上次更新',
        nav: [
            { text: '导航栏一', link: '/' },
            { text: '导航栏二', link: '/docs/html/' },
            { text: '导航栏三', link: '/docs/css/' },
        ],
        sidebar: [
            {
                title: '侧边栏一',
                collapsable: false,
                children: [
                    '/docs/css/',
                    '/docs/css/1.md'
                ]
            },
            {
                title: '侧边栏二',
                collapsable: false,
                children: [ 
                    '/docs/html/',
                    '/docs/html/1.md'
                ]
            },
            {
                title: '侧边栏三',
                collapsable: false,
                children: [ 
                    '/docs/js/',
                    '/docs/js/1.md'
                ]
            },
        ]
    }
}