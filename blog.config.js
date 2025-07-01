// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'matery', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2025, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 更新缓存间隔 单位(秒)；即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [19, 7], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '默然', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '普通的大学牲', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://moranneko.vercel.app/', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客, 默然', // 网站关键词 英文逗号隔开
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXX
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // 备案查询链接，如果用了萌备等备案请在这里填写

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // 邮箱地址 例如mail@tangly1024.com
  //CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || 'https://x.com/moran_neko', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/GhostJoel', // 你的github个人主页
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的telegram 地址
  //CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn 首页
  //CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // 您的instagram地址
  //CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || 'https://space.bilibili.com/647452976', // B站主页
  //CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube主页

// 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
      process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
      'https://cdn.jsdelivr.net/npm/live2d-widget-model-z16/assets/z16.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models   这是另一个地址  https://github.com/imuncle/live2d
  WIDGET_PET_SWITCH_THEME: false, // 点击宠物挂件切换博客主题

  // 音乐播放插件
  //MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  //MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  //MUSIC_PLAYER_AUTO_PLAY: process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  //MUSIC_PLAYER_SHOW_LRC: process.env.NEXT_PUBLIC_MUSIC_PLAYER_SHOW_LRC || false, // 是否展示歌词（前提是有配置歌词路径，对 meting 无效）
  //MUSIC_PLAYER_CDN_URL: process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL || 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  //MUSIC_PLAYER_ORDER: 'list', // 默认播放方式，顺序 list，随机 random
  //MUSIC_PLAYER_AUDIO_LIST: [ // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
  //  {
  //    name: 'リナリアが咲いて(姬金鱼草盛开)',
  //    artist: 'nyamura',
  //    url: 'https://music.163.com/song/media/outer/url?id=2670370756.mp3',
  //    cover: 'http://p1.music.126.net/lilIUusjLV9yyGbs72UOxw==/109951170434320743.jpg?param=130y130'
  //  },
  //  {
  //    name: '胸の煙',
  //    artist: 'ずっと真夜中でいいのに。',
  //    url: 'https://music.163.com/song/media/outer/url?id=1819308141.mp3',
  //    cover: 'http://p2.music.126.net/sZWouKjMg7eFCsWC5l8IYQ==/109951165714669526.jpg?param=130y130'
 //   }
 // ],
  //MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  //MUSIC_PLAYER_METING_SERVER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  //MUSIC_PLAYER_METING_ID: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  //MUSIC_PLAYER_METING_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

APPLAYER: true, // 须确认存在

MUSIC_PLAYER: true,
MUSIC_PLAYER_VISIBLE: true,
MUSIC_PLAYER_AUTO_PLAY: true,
MUSIC_PLAYER_SHOW_LRC: false,
MUSIC_PLAYER_ORDER: 'list',
MUSIC_PLAYER_METING: true,
MUSIC_PLAYER_METING_SERVER: 'netease',
MUSIC_PLAYER_METING_ID: '13909811255',
MUSIC_PLAYER_METING_LRC_TYPE: '0',
MUSIC_PLAYER_CDN_URL: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js',
MUSIC_PLAYER_AUDIO_LIST: []

  
  // 樱花飘落特效
  //SAKURA : process.env.NEXT_PUBLIC_SAKURA || true, // 开关
  // 星空雨特效 黑夜模式才会生效
  //STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true, // 开关
  // 鼠标点击烟花特效
  //FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true, // 开关
  // 烟花色彩，感谢 https://github.com/Vixcity 提交的色彩
  //FIREWORKS_COLOR: ['255, 20, 97', '24, 255, 146', '90, 135, 255', '251, 243, 140'],

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能

  // 其它复杂配置
  // 原配置文件过长，且并非所有人都会用到，故此将配置拆分到/conf/目录下, 按需找到对应文件并修改即可
  ...require('./conf/comment.config'), // 评论插件
  ...require('./conf/contact.config'), // 作者联系方式配置
  ...require('./conf/post.config'), // 文章与列表配置
  ...require('./conf/analytics.config'), // 站点访问统计
  ...require('./conf/image.config'), // 网站图片相关配置
  ...require('./conf/font.config'), // 网站字体
  ...require('./conf/right-click-menu'), // 自定义右键菜单相关配置
  ...require('./conf/code.config'), // 网站代码块样式
  ...require('./conf/animation.config'), // 动效美化效果
  ...require('./conf/widget.config'), // 悬浮在网页上的挂件，聊天客服、宠物挂件、音乐播放器等
  ...require('./conf/ad.config'), // 广告营收插件
  ...require('./conf/plugin.config'), // 其他第三方插件 algolia全文索引

  // 高级用法
  ...require('./conf/layout-map.config'), // 路由与布局映射自定义，例如自定义特定路由的页面布局
  ...require('./conf/notion.config'), // 读取notion数据库相关的扩展配置，例如自定义表头
  ...require('./conf/dev.config'), // 开发、调试时需要关注的配置

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu类型的菜单，替代了3.12版本前的Page类型

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许，如果设置为false、则全栈禁止复制内容。

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 欢迎语打字效果,Hexo,Matery主题支持, 英文逗号隔开多个欢迎语。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    '欢迎来到我的博客🎉',

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
