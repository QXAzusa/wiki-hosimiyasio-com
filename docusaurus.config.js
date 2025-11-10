// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '汐明之恋 - 非官方主页',
  tagline: 'Dinosaurs are cool',
  url: 'https://www.hosimiyasio.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: '/img/icon_navbar.ico',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  markdown:{
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'throw'
    }
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  future: {
    v4: true,
    experimental_faster: true,
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '所有文章',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          path:'article',
          routeBasePath:'article'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/article/**','/archive-page/**','/docs/**','/about','/wiki','/copyright','/fansub-recruit','/tachie','/timeline'],
          filename: 'sitemap.xml',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '汐明之恋 - Unofficial',
        logo: {
          alt: 'Site Logo',
          src: '/img/icon_navbar.ico',
        },
        items: [
          {label:'历程',to:'/timeline'},
          {label: '立绘', to:'/tachie', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '网站地图',
            items: [
              {label:'历程',to:'/timeline'},
              {label:'立绘',to:'/tachie'}
            ],
          },
          {
            title: '官方相关',
            items: [
              {
                label: '官方主页',
                href: 'https://page.hosimiyasio.com/outlinks.html?target=https://hosimiyasio-official.com',
              },
              {
                label: '哔哩哔哩-主页',
                href: 'https://page.hosimiyasio.com/outlinks.html?target=https://space.bilibili.com/402417817',
              },
              {
                label: '哔哩哔哩-直播间',
                href: 'https://page.hosimiyasio.com/outlinks.html?target=https://live.bilibili.com/22047448',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Copyright',
                to: '/copyright',
              },
              {
                label: 'Github Repo',
                href: 'https://page.hosimiyasio.com/outlinks.html?target=https://github.com/QXAzusa/hosimiyasio.com',
              },
              {
                label: '关于本站',
                to: '/about',
              }
            ],
          },
        ],
        copyright: `<div id="footer_pc">Copyright © ${new Date().getFullYear()} QXAzusa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Powered by Docusaurus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-2</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.mps.gov.cn/#/query/webSearch?code=32081202000374" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000374号</a><br></div>
        <div id="footer_mobile">
        <br><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏ICP备2021044611号-2</a>
        <br><a href="https://beian.mps.gov.cn/#/query/webSearch?code=32081202000374" target="_blank" rel="noopener" style="text-decoration: none;color:var(--ifm-footer-link-color)!important">苏公网安备 32081202000374号</a><br>
        Copyright © ${new Date().getFullYear()} QXAzusa
        <br>Powered by Docusaurus</div>`},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {name: 'referrer', content: 'always'},
        {name: 'description', content:'说中文和日语的喜欢玩游戏的百合系Vtuber星宫汐的非官方网站'}
      ],
    }),
    scripts: [
    ],
    clientModules: [require.resolve('./inject-lodash.js')],
    plugins: [
      [
        "docusaurus-plugin-less",{lessOptions:{javascriptEnabled: true}}
      ]
    ],
};

module.exports = config;