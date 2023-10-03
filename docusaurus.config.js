// @ts-check

const path = require('path')
const beian = '闽ICP备2020017848号-2'

const announcementBarContent = ''

module.exports = async function createConfigAsync() {
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'Aivesa Wiki',
    url: 'https://wiki.aivesa.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'aivesa',
    projectName: 'aivesa-wiki',
    tagline: 'Aivesa 官方文档',
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    themeConfig: {
      // announcementBar: {
      //   id: 'announcementBar-3',
      //   content: announcementBarContent,
      // },
      metadata: [
        {
          name: 'keywords',
          content: 'Aivesa, 艾维莎',
        },
        {
          name: 'keywords',
          content: 'AI, openai, chatGPT, gpt-4, llm,',
        },
        {
          name: 'keywords',
          content: '编程爱好者, Web开发者, 写过爬虫, 学过逆向, 现在主攻ts全栈',
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      headTags: [
        {
          tagName: 'meta',
          attributes: {
            name: 'description',
            content: 'Aivesa 官方知识库',
          },
        },
      ],
      navbar: {
        logo: {
          alt: 'Aivesa',
          src: 'img/logo.png',
          srcDark: 'img/logo.png',
        },
        hideOnScroll: true,
        items: [
          {
            label: '👋Aivesa 简介',
            position: 'left',
            to: 'docs/aivesa',
          },
          {
            label: '👋对话教程',
            position: 'left',
            to: 'docs/llm',
          },
          {
            label: '👋绘画教程',
            position: 'left',
            to: 'docs/midjourney',
          },
          {
            label: '更多',
            position: 'left',
            items: [
              { label: '新闻', to: 'blog' },
              { label: '项目', to: 'project' },
              { label: '归档', to: 'blog/archive' },
              { label: '友链', to: 'friends' },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习',
            items: [
              { label: '博客', to: 'blog' },
              { label: '归档', to: 'blog/archive' },
            ],
          },
          {
            title: '社交媒体',
            items: [
              { label: '关于我', to: '/about' },
              { label: 'GitHub', href: 'https://github.com/kuizuo' },
              { label: 'Twitter', href: 'https://twitter.com/kuizuo' },
            ],
          },
          {
            title: '更多',
            items: [
              { label: '友链', position: 'right', to: 'friends' },
              // { label: '我的站点', position: 'right', to: 'website' },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `<p>Copyright © 2023 - Aivesa Wiki</p>`,
      },
      algolia: {
        appId: 'GV6YN1ODMO',
        apiKey: '50303937b0e4630bec4a20a14e3b7872',
        indexName: 'kuizuo',
      },
      giscus: {
        repo: 'kuizuo/blog',
        repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
        category: 'General',
        categoryId: 'DIC_kwDOF7NJDM4CPK95',
        theme: 'light',
        darkTheme: 'dark',
      },
      socials: {
        github: 'https://github.com/kuizuo',
        twitter: 'https://twitter.com/kuizuo',
        juejin: 'https://juejin.cn/user/1565318510545901',
        csdn: 'https://blog.csdn.net/kuizuo12',
        qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=911993023&amp;site=qq',
        zhihu: 'https://www.zhihu.com/people/kuizuo',
        cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
        email: 'mailto:hi@kuizuo.cn',
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['java', 'php', 'rust', 'toml'],
        defaultLanguage: 'javascript',
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
          },
          blog: false,
          theme: {
            customCss: [require.resolve('./src/css/custom.scss')],
          },
          sitemap: {
            changefreq: 'daily',
            priority: 0.5,
          },
          gtag: {
            trackingID: 'G-S4SD5NXWXF',
            anonymizeIP: true,
          },
          // debug: true,
        }),
      ],
    ],
    plugins: [
      'docusaurus-plugin-image-zoom',
      'docusaurus-plugin-sass',
      path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
      path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
      [
        path.resolve(__dirname, './src/plugin/plugin-content-blog'), // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
        {
          path: 'blog',
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogDescription: '代码人生：编织技术与生活的博客之旅',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Blogs',
          postsPerPage: 10,
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: 'all',
            title: 'Aivesa Wiki',
            copyright: `Copyright © ${new Date().getFullYear()} Aivesa Wiki Built with Docusaurus.`,
          },
        },
      ],
      [
        '@docusaurus/plugin-ideal-image',
        {
          disableInDev: false,
        },
      ],
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
            { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
            { tagName: 'meta', name: 'theme-color', content: '#12affa' },
          ],
        },
      ],
    ],
    stylesheets: [],
    i18n: {
      defaultLocale: 'zh-CN',
      locales: ['en', 'zh-CN'],
      localeConfigs: {
        en: {
          htmlLang: 'en-GB',
        },
      },
    },
  }
}
