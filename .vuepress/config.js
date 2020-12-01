module.exports = {
    title:'小秦',
    description:'Just play around',
    themeConfig: {
        nav: [
            { text:'主页',link:'/'},
            { text:'博文',
            items: [
                { text:'Android',link:'/android/'},
                { text:'ios',link:'/ios/'},
                { text:'web',link:'/web/'}
            ]
        },
        { text:'关于',link:'/about/'},
        { text:'Github',link:'https://github.com/'}
        ],
        sidebar: {
            '/android/': [
                "",
                "android1"
            ],
            '/ios/': [
                "",
                "ios1"
            ],
            '/web/': [
                "",
                "web1"
            ],
            sidebarDepth: 2,
            lastUpdated: 'Last Updated'
        }
    },
    // base:'/blog/'
}