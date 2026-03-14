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
      subtitle: "A Qt-based desktop text editor focused on being lightweight while still practical for development and troubleshooting workflows.",
      cta: "Download v1.1.2",
      version: "Latest: v1.1.2",
    },
    features: {
      title: "Key Features",
      more: "View All Features",
      list: [
        {
          title: "Smart Editing",
          desc: "Multi-tab editing with session auto-save/restore, cursor position persistence, syntax highlighting for C/C++, Python, Markdown, and more.",
        },
        {
          title: "Search & Replace",
          desc: "Find/replace with Regex support, memory limits for large files, search history, and docked results panel.",
        },
        {
          title: "Compare Tools",
          desc: "Text and folder comparison with diff navigation, merge capabilities, and quick diff from tabs.",
        },
        {
          title: "Hex Editor",
          desc: "Hex view with synchronized ASCII area, insert/replace modes, undo/redo support.",
        },
        {
          title: "SSH Terminal",
          desc: "Built-in SSH terminal with plugin architecture, ANSI support, integrated file explorer.",
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
                "Session auto-save and cursor position persistence",
                "Custom tab naming via context menu",
                "Drag-and-drop file open",
                "Line numbers and detailed status bar (Ln/Col/Pos/Lines/Length)",
                "Zoom in/out",
                "External file change detection with reload prompt",
                "Navigation history (Step Back/Forward)",
                "Optional visible whitespace and control characters",
                "View as Hex context menu (v1.1.0+)",
                "Hex Open Recent feature (v1.1.0+)"
            ]
        },
        {
            category: "Search, Replace & Marking",
            items: [
                "Find/replace with Normal, Extended, and Regex modes",
                "Case-sensitive, whole-word, direction, wrap-around options",
                "'Find All in Current' with docked results panel",
                "Search history persistence (v1.1.0+)",
                "Configurable memory limits to prevent OOM (v1.1.0+)",
                "Mark/unmark current word",
                "Scrollbar highlights for matches"
            ]
        },
        {
            category: "File Search",
            items: [
                "File Name Search: dedicated dock panel for directory search",
                "Recursive subdirectory search with wildcard support",
                "Results in tree view with file path and size",
                "File Content Search: parallel search with configurable threads",
                "Click result to jump to matching line"
            ]
        },
        {
            category: "Multi-cursor & Selection",
            items: [
                "Column-mode capability enabled by default",
                "Alt + Click: add multiple cursors",
                "Alt + Drag: rectangular selection",
                "Alt + Shift + Arrow: vertical cursor expansion"
            ]
        },
        {
            category: "Syntax Highlighting",
            items: [
                "C/C++ (.c, .cc, .cpp, .h)",
                "Python (.py)",
                "MindIR/IR (.ir, .dat)",
                "Markdown (.md)",
                "HTML (.html, .htm)",
                "Plain text (.txt)"
            ]
        },
        {
            category: "Compare Tools",
            items: [
                "Text Compare: Side-by-side, diff navigation, merge",
                "Compare and display line endings (v1.1.0+)",
                "Folder Compare: Synchronized left/middle/right tree views",
                "Batch copy/delete operations",
                "Quick Diff from Tabs"
            ]
        },
        {
            category: "Specialized Tools",
            items: [
                "Hex Editor with synchronized ASCII area, insert/replace modes",
                "SSH Terminal: plugin-based architecture (v1.1.0+)",
                "Integrated file explorer for SSH and local files (v1.1.0+)",
                "Desktop Drawing & Screenshot tools",
                "Undo/redo for screenshot drawing (v1.1.0+)",
                "IR Structure Analysis (Outline, Function/Node Hierarchy)",
                "Markdown/HTML Split Preview (Horizontal/Vertical)",
                "Cross-Platform Support (Windows/Linux)"
            ]
        },
        {
            category: "Themes & Customization",
            items: [
                "Light / Dark themes plus imported themes",
                "Theme preview on hover",
                "Editor font, background color, window opacity",
                "Toolbar and dock visibility options",
                "Chinese/English UI language switch"
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
      subtitle: "一个基于 Qt 的桌面文本编辑器，定位为「轻量但功能完整」的开发工具。",
      cta: "下载 v1.1.2",
      version: "最新版本: v1.1.2",
    },
    features: {
      title: "核心功能",
      more: "查看所有功能",
      list: [
        {
          title: "智能编辑",
          desc: "多标签页编辑，支持会话自动保存/恢复及光标位置恢复，C/C++/Python/Markdown 等语法高亮。",
        },
        {
          title: "搜索与替换",
          desc: "支持正则搜索，内存限制防止大文件 OOM，搜索历史，搜索结果停靠面板。",
        },
        {
          title: "比较工具",
          desc: "文本与文件夹对比，差异导航与合并，标签页快速 Diff。",
        },
        {
          title: "十六进制编辑",
          desc: "十六进制视图与 ASCII 区联动，支持插入/替换模式，撤销/重做。",
        },
        {
          title: "SSH 终端",
          desc: "内置 SSH 终端，插件化架构，ANSI 支持，集成文件浏览器。",
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
                "多标签页编辑，防止同一文件重复打开",
                "会话自动保存/恢复，光标位置持久化",
                "支持自定义标签页名称（通过右键菜单）",
                "支持拖拽打开文件（窗口和编辑区）",
                "显示行号及详细状态栏（Ln/Col/Pos/Lines/Length）",
                "支持缩放（Zoom In/Zoom Out）",
                "自动检测外部文件变化并提示重载",
                "跳转历史（Step Back / Step Forward）",
                "可选显示空格、制表符、换行等特殊字符",
                "\"View as Hex\" 上下文菜单，快速查看十六进制 (v1.1.0+)",
                "\"Hex Open Recent\" 功能 (v1.1.0+)"
            ]
        },
        {
            category: "搜索、替换与标记",
            items: [
                "支持普通、扩展及正则搜索模式",
                "区分大小写、全词、方向、循环搜索控制",
                "“在当前文件中查找全部”并显示结果面板",
                "搜索历史跨会话持久化 (v1.1.0+)",
                "可配置内存限制，防止大文件搜索时OOM (v1.1.0+)",
                "关键字标记（Mark/Unmark）和一键清除",
                "滚动条命中位置高亮（搜索、标记、差异等）"
            ]
        },
        {
            category: "文件搜索",
            items: [
                "文件名搜索：专用停靠面板，支持在目录中搜索",
                "递归搜索子目录，支持通配符",
                "结果以树形视图显示，包含文件路径和大小",
                "文件内容搜索：并行搜索，支持配置线程数",
                "点击结果跳转到文件中的匹配行"
            ]
        },
        {
            category: "多光标与列模式",
            items: [
                "默认启用列模式能力",
                "Alt + 点击：添加多光标",
                "Alt + 拖拽：矩形区域选择",
                "Alt + Shift + 方向键：按列扩展/增加光标"
            ]
        },
        {
            category: "语法高亮",
            items: [
                "C/C++（.c, .cc, .cpp, .h）",
                "Python（.py）",
                "MindIR/IR（.ir, .dat）",
                "Markdown（.md）",
                "HTML（.html, .htm）",
                "普通文本（.txt）"
            ]
        },
        {
            category: "比较工具",
            items: [
                "文本比较：双文件并排对比、差异导航、合并",
                "新增比较并显示行尾符号选项 (v1.1.0+)",
                "文件夹比较：左/中/右三列联动视图",
                "批量复制（左到右 / 右到左）、批量删除",
                "通过标签页快速发起比较"
            ]
        },
        {
            category: "专业工具",
            items: [
                "十六进制编辑器：ASCII 区联动，插入/替换模式",
                "SSH 终端：插件化架构 (v1.1.0+)",
                "集成文件浏览器：统一视图支持 SSH 和本地文件 (v1.1.0+)",
                "桌面绘图与截图工具",
                "截图绘图工具栏添加撤销/重做功能 (v1.1.0+)",
                "IR 结构分析（大纲视图、函数/节点层级图）",
                "Markdown/HTML 双栏预览（左右/上下布局）",
                "跨平台支持（Windows/Linux）"
            ]
        },
        {
            category: "主题与界面定制",
            items: [
                "Light / Dark + 多套导入主题",
                "主题菜单支持 hover 延时预览",
                "编辑器字体、背景色、窗口透明度",
                "工具栏、资源管理器、Outline、Hierarchy 显示控制",
                "中英文界面切换"
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
  v1_1_2: {
    version: "v1.1.2",
    date: "2026-03-15",
    linux: [
      {
        name: "QEditor_1.1.2_Linux_amd64.deb",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.1.2/QEditor_1.1.2_Linux_amd64.deb",
        type: "DEB Package",
      },
      {
        name: "QEditor_1.1.2_Linux_amd64.AppImage",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.1.2/QEditor_1.1.2_Linux_amd64.AppImage",
        type: "AppImage",
      },
      {
        name: "QEditor_1.1.2_Linux_amd64_bundle.zip",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.1.2/QEditor_1.1.2_Linux_amd64_bundle.zip",
        type: "ZIP Bundle",
      },
    ],
    windows: [
      {
        name: "QEditor_1.1.2_Windows_amd64_setup.exe",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.1.2/QEditor_1.1.2_Windows_amd64_setup.exe",
        type: "Installer (exe)",
      },
      {
        name: "QEditor_1.1.2_Windows_amd64.zip",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.1.2/QEditor_1.1.2_Windows_amd64.zip",
        type: "Portable (zip)",
      },
    ],
  },
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
