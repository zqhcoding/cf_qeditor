export const content = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      download: "Download",
      support: "Support",
    },
    hero: {
      title: "QEditor",
      subtitle: "A lightweight, powerful, and cross-platform text editor designed for efficiency.",
      cta: "Download v1.0.0",
      version: "Latest: v1.0.0",
    },
    features: {
      title: "Key Features",
      more: "View All Features",
      list: [
        {
          title: "Smart Editing",
          desc: "Multi-tab support, syntax highlighting for C/C++, Python, Markdown, etc., and advanced navigation.",
        },
        {
          title: "Search & Replace",
          desc: "Powerful find/replace with Regex support, multi-cursor editing, and rectangular selection.",
        },
        {
          title: "Compare Tools",
          desc: "Built-in file and folder comparison with diff navigation and merge capabilities.",
        },
        {
          title: "Hex Editor",
          desc: "Integrated Hex view with synchronized ASCII area for low-level editing.",
        },
        {
          title: "SSH Terminal",
          desc: "Built-in SSH terminal with session management and ANSI support.",
        },
        {
            title: "More Features",
            desc: "Click to see the complete list of capabilities including IR Analysis, Drawing Tools, and more.",
            isMore: true,
        }
      ],
      allFeatures: [
        {
            category: "Text Editing & Navigation",
            items: [
                "Multi-tab editing with duplicate-open prevention",
                "Drag-and-drop file open",
                "Line numbers and detailed status bar",
                "Zoom in/out",
                "External file change detection",
                "Navigation history (Step Back/Forward)",
                "Optional visible whitespace"
            ]
        },
        {
            category: "Search, Replace & Marking",
            items: [
                "Find/replace with Normal, Extended, and Regex modes",
                "Case-sensitive, whole-word, direction options",
                "'Find All in Current' with docked results panel",
                "Mark/unmark current word",
                "Scrollbar highlights for matches"
            ]
        },
        {
            category: "Multi-cursor & Selection",
            items: [
                "Column-mode capability",
                "Alt + Click for multiple cursors",
                "Alt + Drag for rectangular selection",
                "Alt + Shift + Arrow for vertical expansion"
            ]
        },
        {
            category: "Compare Tools",
            items: [
                "Text Compare: Side-by-side, diff navigation, merge",
                "Folder Compare: Synchronized tree views, batch copy/delete",
                "Quick Diff from Tabs"
            ]
        },
        {
            category: "Specialized Tools",
            items: [
                "Hex Editor with synchronized ASCII area",
                "SSH Terminal with ANSI support",
                "Desktop Drawing & Screenshot tools",
                "IR Structure Analysis (Outline, Call Hierarchy)",
                "Markdown/HTML Preview (Split View)",
                "Cross-Platform Support (Windows/Linux)"
            ]
        }
      ]
    },
    gallery: {
        title: "Screenshots",
        images: [
            "screenshots/screenshot_1.png",
            "screenshots/screenshot_2.png",
            "screenshots/screenshot_3.png",
            "screenshots/screenshot_4.png",
            "screenshots/screenshot_5.png",
            "screenshots/screenshot_6.png"
        ]
    },
    download: {
      title: "Download QEditor",
      subtitle: "Choose the version for your operating system.",
      windows: "Windows",
      linux: "Linux",
      version_label: "Version",
      size: "Size",
      date: "Date",
      download_btn: "Download",
      note: "More versions coming soon.",
    },
    footer: {
      copyright: "© 2026 QEditor. All rights reserved.",
      contact: "Contact Support: ",
      email: "support@qeditor.cn",
    },
  },
  zh: {
    nav: {
      home: "首页",
      features: "功能特性",
      download: "下载",
      support: "支持",
    },
    hero: {
      title: "QEditor",
      subtitle: "一款轻量级、功能强大且跨平台的文本编辑器，专为效率而生。",
      cta: "下载 v1.0.0",
      version: "最新版本: v1.0.0",
    },
    features: {
      title: "核心功能",
      more: "查看所有功能",
      list: [
        {
          title: "智能编辑",
          desc: "支持多标签页、C/C++/Python/Markdown 等语法高亮及高级导航功能。",
        },
        {
          title: "搜索与替换",
          desc: "支持正则搜索、多光标编辑及矩形选择，查找替换更高效。",
        },
        {
          title: "比较工具",
          desc: "内置文件及文件夹对比工具，支持差异导航与合并操作。",
        },
        {
          title: "十六进制编辑",
          desc: "集成 Hex 编辑器，支持 ASCII 同步显示，适合底层编辑。",
        },
        {
          title: "SSH 终端",
          desc: "内置 SSH 终端，支持会话管理与 ANSI 渲染，远程连接更便捷。",
        },
        {
            title: "更多功能",
            desc: "点击查看完整功能列表，包含 IR 分析、绘图工具等更多强大功能。",
            isMore: true,
        }
      ],
      allFeatures: [
        {
            category: "文本编辑与导航",
            items: [
                "多标签页编辑，防止重复打开",
                "支持拖拽打开文件",
                "显示行号及详细状态栏信息",
                "支持缩放",
                "外部文件变更检测",
                "导航历史记录（前进/后退）",
                "可选显示空白字符"
            ]
        },
        {
            category: "搜索、替换与标记",
            items: [
                "支持普通、扩展及正则搜索模式",
                "区分大小写、全字匹配及循环搜索",
                "“在当前文件中查找全部”并显示结果面板",
                "标记/取消标记当前词",
                "滚动条高亮显示匹配位置"
            ]
        },
        {
            category: "多光标与列模式",
            items: [
                "默认支持列模式",
                "Alt + 点击：添加多光标",
                "Alt + 拖拽：矩形选择",
                "Alt + Shift + 方向键：垂直扩展光标"
            ]
        },
        {
            category: "比较工具",
            items: [
                "文本比较：双文件并排对比、差异导航、合并",
                "文件夹比较：同步树状视图、批量复制/删除",
                "通过标签页快速发起比较"
            ]
        },
        {
            category: "专业工具",
            items: [
                "Hex 编辑器（带 ASCII 同步显示）",
                "内置 SSH 终端（支持 ANSI）",
                "桌面绘图与截图工具",
                "IR 结构分析（大纲视图、调用层级图）",
                "Markdown/HTML 实时预览（分屏编辑）",
                "跨平台支持（Windows/Linux）"
            ]
        }
      ]
    },
    gallery: {
        title: "界面预览",
        images: [
            "screenshots/screenshot_1.png",
            "screenshots/screenshot_2.png",
            "screenshots/screenshot_3.png",
            "screenshots/screenshot_4.png",
            "screenshots/screenshot_5.png",
            "screenshots/screenshot_6.png"
        ]
    },
    download: {
      title: "下载 QEditor",
      subtitle: "请选择适合您操作系统的版本。",
      windows: "Windows",
      linux: "Linux",
      version_label: "版本",
      size: "大小",
      date: "日期",
      download_btn: "下载",
      note: "更多版本敬请期待。",
    },
    footer: {
      copyright: "© 2026 QEditor. 保留所有权利。",
      contact: "技术支持: ",
      email: "support@qeditor.cn",
    },
  },
};

export const downloads = {
  v1_0_0: {
    version: "v1.0.0",
    date: "2026-02-21",
    linux: [
      {
        name: "QEditor_1.0.0_Linux_amd64.deb",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.0.0/QEditor_1.0.0_Linux_amd64.deb",
        type: "DEB Package",
      },
      {
        name: "QEditor_1.0.0_Linux_amd64.AppImage",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.0.0/QEditor_1.0.0_Linux_amd64.AppImage",
        type: "AppImage",
      },
      {
        name: "QEditor_1.0.0_Linux_amd64_bundle.zip",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.0.0/QEditor_1.0.0_Linux_amd64_bundle.zip",
        type: "ZIP Bundle",
      },
    ],
    windows: [
      {
        name: "QEditor_1.0.0_Windows_amd64_setup.exe",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.0.0/QEditor_1.0.0_Windows_amd64_setup.exe",
        type: "Installer (exe)",
      },
      {
        name: "QEditor_1.0.0_Windows_amd64.zip",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.0.0/QEditor_1.0.0_Windows_amd64.zip",
        type: "Portable (zip)",
      },
    ],
  },
};
