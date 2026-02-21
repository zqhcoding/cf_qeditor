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
          title: "Markdown Preview",
          desc: "Split-view editing for Markdown and HTML with instant preview.",
        },
        {
            title: "MindIR Analysis",
            desc: "Structure analysis for IR files including Outline and Call Hierarchy graphs.",
        },
        {
            title: "Cross-Platform",
            desc: "Available on Windows and Linux with consistent experience.",
        }
      ],
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
          title: "Markdown 预览",
          desc: "Markdown 与 HTML 的分屏实时预览编辑。",
        },
        {
            title: "MindIR 分析",
            desc: "支持 IR 文件的结构分析，包括大纲视图与调用层级图。",
        },
        {
            title: "跨平台支持",
            desc: "完美支持 Windows 和 Linux，提供一致的使用体验。",
        }
      ],
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
