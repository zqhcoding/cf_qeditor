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
      subtitle: "A lightweight desktop text editor with practical features for development and troubleshooting.",
      cta: "Download v1.2.5",
      version: "Latest: v1.2.5",
    },
    features: {
      title: "Key Features",
      more: "View All Features",
      list: [
        {
          title: "Smart Editing",
          desc: "Multi-tab editing with session auto-save/restore, cursor persistence, syntax highlighting.",
        },
        {
          title: "Search & Replace",
          desc: "Find/replace with Regex, results panel, search history, memory limits for large files.",
        },
        {
          title: "Compare Tools",
          desc: "Text and folder comparison with diff navigation, merge, quick diff from tabs.",
        },
        {
          title: "Hex Editor",
          desc: "Hex view with ASCII sync, insert/replace modes, \"View as Hex\" context menu.",
        },
        {
          title: "SSH Terminal",
          desc: "Built-in SSH terminal, plugin architecture, integrated file explorer, ANSI support.",
        },
        {
          title: "Drawing & Screenshot",
          desc: "Desktop annotation tools, area screenshot, undo/redo for drawing.",
        },
        {
          title: "IR Analysis",
          desc: "Outline panel, function/node hierarchy graphs, quick navigation.",
        },
        {
          title: "Large File Editor",
          desc: "Piece-based storage for files exceeding threshold, full editing support.",
        },
        {
            title: "More Features",
            desc: "Markdown/HTML preview, Base64 converter, themes, multi-cursor, and more.",
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
                "Drag-and-drop file open (main window and editor area)",
                "Line numbers and status bar (Ln/Col/Pos/Lines/Length)",
                "Zoom in/out",
                "External file change detection with reload prompt",
                "Navigation history (Step Back/Forward)",
                "Optional visible whitespace and control characters",
                "URL and Email link navigation (Ctrl+Click)",
                "Indent guide lines (configurable style, color)",
                "Current line highlight style (Border Line/Background Color)",
                "View as Hex context menu for quick hex viewing",
                "Hex Open Recent feature"
            ]
        },
        {
            category: "Large File Editor",
            items: [
                "Piece-based storage avoids loading entire file into memory",
                "Full editing support: undo/redo, copy/paste, delete",
                "Search/replace with scope support",
                "Line numbers and scrollbar highlight markers",
                "Special character visibility (spaces, tabs, line endings)",
                "CRLF displayed as separate CR and LF markers",
                "Indent guide lines support",
                "Optional line wrapping",
                "Multi-cursor/column mode support",
                "IME input support for column mode editing",
                "Cursor blinking animation",
                "Word-wise keyboard navigation"
            ]
        },
        {
            category: "Search, Replace & Marking",
            items: [
                "Find/replace with Normal, Extended, and Regex modes",
                "Case-sensitive, whole-word, direction, wrap-around options",
                "Find All in Current with docked results panel",
                "Search within Selection with visual scope highlighting",
                "Search history persistence across sessions",
                "Search panel visibility state saved/restored",
                "Configurable memory limits to prevent OOM",
                "Mark/unmark current word and clear-all marks",
                "Scrollbar highlights for search/mark/diff positions"
            ]
        },
        {
            category: "File Search",
            items: [
                "File Name Search: dedicated dock panel for directory search",
                "Recursive subdirectory search with wildcard support",
                "Results in tree view with file path and size",
                "Path input with tab completion and validation",
                "File Content Search: parallel search with configurable threads",
                "Match highlighting in results",
                "Click result to jump to matching line"
            ]
        },
        {
            category: "Multi-cursor & Column Selection",
            items: [
                "Column-mode capability enabled by default",
                "Alt + Click: add multiple cursors",
                "Alt + Drag: rectangular selection",
                "Alt + Shift + Arrow: vertical cursor expansion",
                "IME input method support for column mode editing",
                "Undo/redo preserves multi-cursor state"
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
            category: "Markdown/HTML Preview",
            items: [
                "Split edit-preview mode for Markdown/HTML files",
                "Horizontal or vertical orientation",
                "View/Edit or Edit/View layout order",
                "Split sizes and layout persisted"
            ]
        },
        {
            category: "Compare Tools",
            items: [
                "Text Compare: Side-by-side dual-file compare",
                "Diff section navigation (Next/Prev Section)",
                "Filter modes: All/Diffs/Same",
                "Block-level merge (copy section left/right)",
                "Compare and display line endings",
                "Folder Compare: synchronized left/middle/right tree views",
                "Batch copy/delete operations",
                "Quick Diff from Tabs (View Diff between...)",
                "File manager context menu integration (Dolphin/Thunar/Nautilus/Nemo/Deepin)"
            ]
        },
        {
            category: "Hex Editor",
            items: [
                "Hex view with synchronized ASCII area",
                "Insert/replace modes",
                "Undo/redo, copy/paste, delete",
                "Cursor address/status updates"
            ]
        },
        {
            category: "SSH Terminal",
            items: [
                "Built-in SSH terminal tabs",
                "Separate Qt plugin architecture",
                "Integrated with Explorer for SSH and local files",
                "RemoteExplorerTreeView with header, sorting, file icons",
                "SSH command string parsing (-p, ProxyCommand)",
                "ANSI sequence rendering (colors, cursor movement)",
                "Terminal timestamp sidebar (HH:mm:ss)",
                "SSH session history and clone",
                "Local terminal tabs (Shell integration)",
                "Windows: configurable shell (PowerShell/cmd.exe)",
                "Terminal sessions participate in session restore"
            ]
        },
        {
            category: "IR Structure Analysis",
            items: [
                "Outline panel: function list and return values",
                "Function Hierarchy graph: call relationships",
                "Node Hierarchy graph: intra-function node dependencies",
                "Double-click graph items to jump to source",
                "Ctrl-hover/Ctrl-jump hints for functions and variables"
            ]
        },
        {
            category: "Drawing & Screenshot Tools",
            items: [
                "Desktop annotation: pen, line, rectangle, circle, arrow, text, eraser",
                "Area screenshot with drag/resize controls",
                "Save drawing as image or copy to clipboard",
                "Undo/redo for screenshot drawing toolbar",
                "Screenshot auto-save settings",
                "Global shortcuts: Ctrl+1 (screenshot), Ctrl+` (drawing)"
            ]
        },
        {
            category: "Themes & UI Customization",
            items: [
                "24 built-in themes (Light, Dark, Solarized, OneLight, etc.)",
                "Delayed hover-based theme preview",
                "Editor font, background color, window opacity",
                "Scrollbar auto-hide with configurable timeout",
                "CJK fallback font for unsupported characters",
                "Tab switcher popup (Ctrl+Tab)",
                "Toolbar and dock visibility options",
                "Chinese/English UI language switch"
            ]
        },
        {
            category: "Utility Tools",
            items: [
                "Base64 Converter: encode/decode UTF-8 text",
                "Swap input/output, copy result to clipboard",
                "Access from Tools menu"
            ]
        },
        {
            category: "Session & Single-instance",
            items: [
                "Automatic tab/content snapshot persistence",
                "Restore previous session on startup (lazy loading)",
                "Single-instance app with file forwarding",
                "Unicode file paths support (Windows)"
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
      subtitle: "一款轻量级桌面文本编辑器，兼顾实用功能与开发调试场景。",
      cta: "下载 v1.2.5",
      version: "最新版本: v1.2.5",
    },
    features: {
      title: "核心功能",
      more: "查看所有功能",
      list: [
        {
          title: "智能编辑",
          desc: "多标签页编辑，会话自动保存/恢复，光标位置持久化，语法高亮。",
        },
        {
          title: "搜索与替换",
          desc: "正则搜索，结果面板，搜索历史，大文件内存限制。",
        },
        {
          title: "比较工具",
          desc: "文本与文件夹对比，差异导航与合并，标签页快速 Diff。",
        },
        {
          title: "十六进制编辑",
          desc: "Hex 视图与 ASCII 联动，插入/替换模式，\"View as Hex\" 快捷菜单。",
        },
        {
          title: "SSH 终端",
          desc: "内置 SSH 终端，插件化架构，集成文件浏览器，ANSI 支持。",
        },
        {
          title: "绘图与截图",
          desc: "桌面标注工具，区域截图，绘图撤销/重做。",
        },
        {
          title: "IR 分析",
          desc: "大纲面板，函数/节点层级图，快速跳转。",
        },
        {
          title: "大文件编辑",
          desc: "超过阈值自动启用分片存储，完整编辑支持。",
        },
        {
            title: "更多功能",
            desc: "Markdown/HTML 预览、Base64 转换、多主题、多光标等。",
            isMore: true,
        }
      ],
      allFeatures: [
        {
            category: "文本编辑与导航",
            items: [
                "多标签页编辑，避免同一文件重复打开",
                "会话自动保存/恢复，光标位置持久化",
                "支持自定义标签页名称（通过右键菜单）",
                "文件拖拽打开（窗口和编辑区都支持）",
                "行号、状态栏（Ln/Col/Pos/Lines/Length）",
                "缩放（Zoom In/Zoom Out）",
                "自动检测外部文件变化并提示重载",
                "跳转历史（Step Back/Step Forward）",
                "可选显示空格、制表符、换行等特殊字符",
                "URL 和邮箱链接导航（Ctrl+Click）",
                "缩进参考线（可配置样式、颜色）",
                "当前行高亮样式（边框线/背景色）",
                "\"View as Hex\" 上下文菜单，快速查看十六进制",
                "\"Hex Open Recent\" 功能"
            ]
        },
        {
            category: "大文件编辑器",
            items: [
                "分片存储，避免将整个文件加载到内存",
                "完整编辑支持：撤销/重做、复制/粘贴、删除",
                "搜索/替换（支持范围限定）",
                "行号和滚动条高亮标记（显示搜索匹配位置）",
                "特殊字符可视化（空格、制表符、换行符）",
                "CRLF 显示为独立的 CR 和 LF 标记",
                "缩进参考线支持",
                "可选文本换行",
                "多光标/列模式支持",
                "列模式编辑支持输入法（IME）",
                "光标闪烁动画",
                "词级键盘导航"
            ]
        },
        {
            category: "搜索、替换与标记",
            items: [
                "查找/替换（普通、扩展、正则）",
                "大小写、全词、方向、循环搜索控制",
                "Find All in Current：当前文件全量命中列表",
                "选区内搜索（视觉高亮显示搜索范围）",
                "搜索历史跨会话持久化",
                "搜索面板可见性状态保存/恢复",
                "可配置内存限制，防止大文件搜索时OOM",
                "关键字标记和一键清除",
                "滚动条命中位置高亮（搜索、标记、差异等）"
            ]
        },
        {
            category: "文件搜索",
            items: [
                "文件名搜索：专用停靠面板，支持在目录中按名称搜索",
                "递归搜索子目录，支持通配符",
                "结果以树形视图显示，包含文件路径和大小",
                "路径输入支持 Tab 补全和验证",
                "文件内容搜索：并行搜索，支持配置线程数",
                "匹配结果高亮显示",
                "点击结果跳转到文件中的匹配行"
            ]
        },
        {
            category: "多光标与列选择",
            items: [
                "默认启用列模式能力",
                "Alt + Click：添加多光标",
                "Alt + Drag：矩形区域选择",
                "Alt + Shift + Arrow：按列扩展/增加光标",
                "列模式编辑支持输入法（IME）",
                "撤销/重做时保持多光标状态"
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
            category: "Markdown/HTML 预览",
            items: [
                "Markdown 或 HTML 文件自动进入分栏模式",
                "支持左右/上下布局",
                "支持\"预览在前\"或\"编辑在前\"",
                "分栏尺寸与布局可持久化"
            ]
        },
        {
            category: "对比工具",
            items: [
                "文本对比：双文件并排对比",
                "差异块导航（Next/Prev Section）",
                "过滤模式：全量/仅差异/仅相同",
                "区块级合并（左右拷贝差异块）",
                "支持比较并显示行尾符号",
                "文件夹对比：左/中/右三列联动视图",
                "批量复制（左到右/右到左）、批量删除",
                "标签页快速 Diff（View Diff between...）",
                "文件管理器上下文菜单集成（Dolphin/Thunar/Nautilus/Nemo/Deepin）"
            ]
        },
        {
            category: "十六进制编辑",
            items: [
                "二进制文件十六进制视图与 ASCII 区联动",
                "支持插入/替换模式",
                "支持撤销/重做、复制/粘贴、删除",
                "光标地址状态显示"
            ]
        },
        {
            category: "SSH 终端",
            items: [
                "内置 SSH 终端标签页",
                "独立 Qt 插件架构",
                "与文件浏览器集成：统一视图支持 SSH 和本地文件",
                "远程文件浏览器支持表头、排序、文件图标",
                "SSH 命令串解析（含 -p 和 ProxyCommand）",
                "ANSI 转义序列渲染（颜色、光标控制）",
                "终端时间戳侧边栏（HH:mm:ss）",
                "SSH 会话历史与克隆",
                "本地终端标签页（Shell 集成）",
                "Windows：可配置 Shell（PowerShell/cmd.exe）",
                "终端会话可参与会话恢复"
            ]
        },
        {
            category: "IR 结构分析",
            items: [
                "Outline 面板：函数列表与返回值",
                "Function Hierarchy：函数调用关系图",
                "Node Hierarchy：函数内部节点依赖图",
                "图中双击节点可跳转到源码位置",
                "Ctrl 悬停/点击跳转提示（函数与变量）"
            ]
        },
        {
            category: "绘图与截图工具",
            items: [
                "桌面绘图（画笔、直线、矩形、圆、箭头、文本、橡皮）",
                "区域截图、拖拽调整、边框缩放",
                "绘图结果可保存或复制到剪贴板",
                "截图绘图工具栏撤销/重做功能",
                "截图自动保存设置",
                "全局快捷键：Ctrl+1（截图）、Ctrl+`（绘图）"
            ]
        },
        {
            category: "主题与界面定制",
            items: [
                "24 种内置主题（Light、Dark、Solarized、OneLight 等）",
                "主题菜单支持 hover 延时预览",
                "编辑器字体、背景色、窗口透明度",
                "滚动条自动隐藏（可配置超时时间）",
                "CJK 字符备用字体",
                "标签切换弹窗（Ctrl+Tab）",
                "工具栏、资源管理器显示控制",
                "中英文界面切换"
            ]
        },
        {
            category: "实用工具",
            items: [
                "Base64 转换器：编码/解码 UTF-8 文本",
                "交换输入/输出，复制结果到剪贴板",
                "从工具菜单访问"
            ]
        },
        {
            category: "会话与单实例",
            items: [
                "自动保存标签页与内容快照",
                "启动恢复上次会话（含懒加载恢复）",
                "单实例运行：重复启动会复用已有窗口",
                "Unicode 文件路径支持（Windows）"
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
    },
    footer: {
      copyright: "© 2026 QEditor. 保留所有权利。",
      contact: "技术支持: ",
      email: "support@qeditor.cn",
    },
  },
};

export const downloads = {
  v1_2_5: {
    version: "v1.2.5",
    date: "2026-04-26",
    linux: [
      {
        name: "QEditor_1.2.5_Linux_amd64.deb",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.2.5/QEditor_1.2.5_Linux_amd64.deb",
        type: "DEB Package",
      },
      {
        name: "QEditor_1.2.5_Linux_amd64.AppImage",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.2.5/QEditor_1.2.5_Linux_amd64.AppImage",
        type: "AppImage",
      },
      {
        name: "QEditor_1.2.5_Linux_amd64_bundle.zip",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.2.5/QEditor_1.2.5_Linux_amd64_bundle.zip",
        type: "ZIP Bundle",
      },
    ],
    windows: [
      {
        name: "QEditor_1.2.5_Windows_amd64_setup.exe",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.2.5/QEditor_1.2.5_Windows_amd64_setup.exe",
        type: "Installer (exe)",
      },
      {
        name: "QEditor_1.2.5_Windows_amd64.zip",
        url: "https://gitee.com/zqhcoding/QEditor-Release/releases/download/QEditor_v1.2.5/QEditor_1.2.5_Windows_amd64.zip",
        type: "Portable (zip)",
      },
    ],
  },
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

export const getLatestVersionKey = () => {
  const keys = Object.keys(downloads);
  const sorted = keys.sort((a, b) => {
    const parseVersion = (v) => v.replace('v', '').replace(/_/g, '.').split('.').map(Number);
    const va = parseVersion(a);
    const vb = parseVersion(b);

    for (let i = 0; i < 3; i++) {
      if (va[i] > vb[i]) return -1;
      if (va[i] < vb[i]) return 1;
    }
    return 0;
  });

  return sorted[0];
};
