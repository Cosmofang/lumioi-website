# DeepLumen Website — Design Specification

> 以 `index.html` 为唯一标准，所有页面严格遵循本文档。

---

## 目录

1. [颜色系统](#1-颜色系统)
2. [字体与排版](#2-字体与排版)
3. [布局与容器](#3-布局与容器)
4. [导航栏](#4-导航栏)
5. [按钮](#5-按钮)
6. [板块间距](#6-板块间距)
7. [页面描边框架](#7-页面描边框架)
8. [页脚](#8-页脚)
9. [响应式断点](#9-响应式断点)
10. [页面清单](#10-页面清单)

---

## 1. 颜色系统

### 基础色板

| 用途 | 值 | 说明 |
|---|---|---|
| 页面背景 | `#faf8f4` | 全局唯一背景色，所有 section 和容器均使用 |
| 正文主色 | `#5a5855` | body 默认文字色 |
| 正文次要色 | `#8c8884` | 副标题、描述文字、标签文字 |
| 深色标题 | `#2c2924` | 强调词、bold 内文 |
| 边框线 | `#e8e4de` | page-frame 描边 |
| 内部分隔线 | `#f0ede8` | 卡片边框、section 内部分隔 |
| 浅边框 | `#eaeaea` | 按钮边框、输入框边框 |

### 品牌渐变（主渐变）

```css
background: linear-gradient(180deg, #ec7070, #f0863f);
```

用于：主按钮背景、渐变标题文字、进度条、徽章、导航右侧 CTA 按钮。

**文字渐变写法：**

```css
background: linear-gradient(180deg, #ec7070, #f0863f);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### 深色背景（仅页脚）

```css
background: linear-gradient(180deg, #1e2939, #101828);
```

---

## 2. 字体与排版

### 字体家族

```css
font-family: 'Inter', 'Inter Fallback', Arial, Helvetica, sans-serif;
```

等宽字体（代码、monospace 标签）：

```css
font-family: 'JetBrains Mono', ui-monospace, monospace;
```

### body 基础

```css
font-size: 16px;
font-weight: 400;
line-height: 24px;  /* 即 1.5 */
color: #5a5855;
```

### 标题层级

| 层级 | font-size | font-weight | line-height | letter-spacing | 颜色 |
|---|---|---|---|---|---|
| **H1 — 深色** | `44px` | `600` | `1.15` | `-0.5px` | `#5a5855` |
| **H1 — 渐变** | `44px` | `600` | `1.15` | — | 品牌渐变（文字裁剪） |
| **H2 — 板块标题** | `44px` | `600` | `1.15` | `-0.5px` | `#5a5855` |
| **H3 — 卡片标题** | `16px` | `700` | — | — | `#5a5855` |
| **H4 — 卡片副标题** | `16px` | `600` | — | — | `#5a5855` |

> 所有页面一级、二级标题统一 44px，不使用 `clamp()`。

### 正文 / 副标题

| 用途 | font-size | color | line-height |
|---|---|---|---|
| Hero 副标题 `.hero-sub` | `16px` | `#8c8884` | `1.7` |
| 板块副标题 `.section-sub` | `16px` | `#8c8884` | `1.7` |
| 正文段落 `p` | `16px` | `#8c8884` | `24px` |
| 小标签 `.section-label` | `12px` | 品牌渐变 | — |
| 等宽小标签 `.section-label-mono` | `12px` | `#b4b0ab` | — |
| 导航链接 | `14px` | `#8c8884` | — |
| 页脚正文 | `14px` | `rgba(255,255,255,0.5)` | `1.75` |
| 版权文字 | `13px` | `rgba(255,255,255,0.35)` | — |

---

## 3. 布局与容器

### 最大宽度

```
全站最大宽度：1440px
```

### page-wrapper（页面主容器）

```css
.page-wrapper {
  width: calc(100% - 40px);
  max-width: 1440px;
  margin: 0 auto;
  background: #faf8f4;
}
```

### 内容容器 `.wrap`（lumenshop / shopify-app 页面）

```css
.wrap {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
}
```

移动端覆盖（≤767px）：`padding: 0 24px`

### 导航 / footer 内容区

```css
.nav-inner  { max-width: 1440px; margin: 0 auto; padding: 16px 80px; }
.footer-inner { max-width: 1440px; margin: 0 auto; padding: 54px 80px 0; }
```

> **规则：** 所有内容容器的水平 padding 须与 nav-inner 保持一致，桌面端 `80px`，从而使内容与导航 logo 左对齐。

---

## 4. 导航栏

### 样式

```css
nav {
  position: fixed;
  top: 0; left: 0; width: 100%;
  z-index: 10002;
  background: rgba(250,248,244,0.90);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.3s ease;
}
```

### Logo

```css
.nav-logo-img { height: 52px; width: auto; margin-top: 10px; }
```

### 导航链接

```css
font-size: 14px; font-weight: 500; color: #8c8884;
/* hover */ color: #5a5855;
/* active */ color: #5a5855; font-weight: 600;
```

### 导航按钮（右侧）

| 类型 | 样式 |
|---|---|
| 幽灵按钮（Book a Demo）| `border: 1px solid #eaeaea; border-radius: 100px; padding: 10px 20px; font-size: 14px; font-weight: 600; color: #5a5855;` |
| 实心按钮（Login / CTA）| `background: linear-gradient(180deg, #ec7070, #f0863f); border-radius: 100px; padding: 10px 20px; font-size: 14px; font-weight: 600; color: #fff;` |

### 移动端汉堡菜单（≤767px）

- 导航链接和右侧按钮组隐藏
- 显示 `.nav-burger` 三横线图标（22×2px，颜色 `#5a5855`）
- 点击展开 `.nav-mobile-menu`（flex column，padding 16px 20px）

---

## 5. 按钮

### 主按钮 `.btn-primary`

```css
padding: 11px 24px;
background: linear-gradient(180deg, #ec7070, #f0863f);
color: #fff;
font-size: 14px;
font-weight: 600;
border-radius: 100px;
border: none;
cursor: pointer;
text-decoration: none;
display: inline-flex; align-items: center; gap: 8px;
box-shadow: 0 4px 16px rgba(240,134,63,0.3);
transition: transform 0.2s, box-shadow 0.2s;
```

**hover：** `transform: translateY(-1px); box-shadow: 0 8px 24px rgba(236,112,112,0.25);`

### 幽灵按钮 `.btn-ghost`

```css
padding: 11px 24px;
background: transparent;
color: #5a5855;
font-size: 14px;
font-weight: 600;
border-radius: 100px;
border: 1px solid #eaeaea;
cursor: pointer;
text-decoration: none;
display: inline-flex; align-items: center; gap: 6px;
transition: border-color 0.2s, background 0.2s;
```

**hover：** `border-color: #c9c9c9; background: rgba(0,0,0,0.02);`

> **注意：** 按钮统一使用 `<a>` 标签时须加 `text-decoration: none`；使用 `<button>` 时须加 `font-family: inherit`。

---

## 6. 板块间距

### 标准 section 间距

index.html 中各 section 使用独立 padding，参考值：

| 场景 | 桌面 padding | 说明 |
|---|---|---|
| 主要内容板块 | `100px 80px` 或 `120px 80px` | 左右 80px 与 nav 对齐 |
| 较小辅助板块 | `60px 80px` | |
| CTA 大板块 | `120px 80px` | |
| footer | `54px 80px 0` | 顶部 54px |

lumenshop / shopify-app 页面中 section 使用 `padding: 96px 0`，内容通过 `.wrap` 的 `padding: 0 80px` 缩进。

### 板块分隔线（可选）

```css
.sec-divider::before {
  content: '';
  display: block;
  width: 100%; max-width: 1440px;
  height: 1px;
  background: rgba(213,207,197,0.7);
}
```

---

## 7. 页面描边框架

所有页面必须包含以下两个固定定位元素（放在 `<body>` 最顶部，nav 之前）：

```html
<div class="page-frame"></div>
<div class="banner-mask"></div>
```

```css
/* 左右竖向描边线 */
.page-frame {
  position: fixed;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 100%; max-width: 1440px;
  height: 100vh;
  border-left: 1px solid #e8e4de;
  border-right: 1px solid #e8e4de;
  pointer-events: none;
  z-index: 9999;
}

/* 顶部遮罩（防止描边在 nav 横幅处穿透） */
.banner-mask {
  position: fixed;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 100%; max-width: 1440px;
  height: 40px;
  border-left: 2px solid #faf8f4;
  border-right: 2px solid #faf8f4;
  pointer-events: none;
  z-index: 10000;
}
```

**响应式：** ≤1100px 时隐藏：

```css
@media (max-width: 1100px) {
  .page-frame, .banner-mask { display: none; }
}
```

---

## 8. 页脚

### 背景

```css
background: linear-gradient(180deg, #1e2939, #101828);
```

### 结构

```
footer
└── .footer-inner (max-width: 1440px, padding: 54px 80px 0)
    ├── .footer-top
    │   ├── .footer-brand (logo + 描述 + 社交图标)
    │   └── .footer-cols (导航列，gap: 72px)
    └── .footer-bottom (版权 + 链接)
```

### 排版

| 元素 | 样式 |
|---|---|
| 列标题 `.footer-col-title` | `16px / 600 / #fff` |
| 链接 `.footer-col a` | `14px / rgba(255,255,255,0.5)` → hover `#fff` |
| 描述 `.footer-desc` | `14px / rgba(255,255,255,0.5) / line-height 1.75` |
| 版权 `.footer-copy` | `13px / rgba(255,255,255,0.35)` |
| 底部链接 | `13px / rgba(255,255,255,0.35)` |
| 分隔线 | `border-top: 1px solid rgba(255,255,255,0.1)` |

### 社交图标

```css
.social-icon {
  width: 34px; height: 34px;
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
}
/* hover */ background: rgba(255,255,255,0.16);
```

---

## 9. 响应式断点

### 断点规则总览

| 断点 | 范围 | 关键变化 |
|---|---|---|
| `≤1439px` | 宽屏 → 标准桌面 | nav padding `80px → 40px`，各 section padding 收窄 |
| `≤1099px` | 平板横屏 | 标题 `44px → 36px`，部分双列布局转单列 |
| `≤900px` | 平板竖屏 | 标题 `36px → 28px` |
| `≤767px` | 手机 | 汉堡导航，内容 padding `→ 20px`，标题 28px，副标题 14px |
| `≤480px` | 小手机 | 标题 `→ 22px`，padding `→ 14px`，按钮转纵向 |
| `≤320px` | 超小手机 | 标题 `→ 19px`，logo 缩小 |

### 标题字号变化表

| 断点 | H1 / H2 |
|---|---|
| `>1099px` | `44px` |
| `≤1099px` | `36px` |
| `≤900px` | `28px` |
| `≤767px` | `28px` |
| `≤480px` | `22px` |
| `≤320px` | `19px` |

### 导航响应

```css
/* ≤1439px */
.nav-inner { padding: 16px 40px; }

/* ≤1099px */
.nav-inner { padding: 16px 36px; }

/* ≤767px */
.nav-inner { padding: 14px 20px; }
.nav-links { display: none; }
.nav-actions { display: none; }
.nav-burger { display: flex; }

/* ≤480px */
.nav-inner { padding: 12px 16px; }
.nav-logo-img { height: 42px; }
```

### .wrap 响应（lumenshop / shopify-app）

```css
/* 桌面 */
.wrap { padding: 0 80px; }

/* ≤767px */
.wrap { padding: 0 24px; }
```

### footer 响应

```css
/* ≤1439px */ .footer-inner { padding: 54px 40px 0; }
/* ≤767px  */ .footer-inner { padding: 40px 20px 0; }
             .footer-top { flex-direction: column; }
             .footer-cols { flex-direction: column; }
/* ≤480px  */ .footer-inner { padding: 32px 14px 0; }
```

---

## 10. 页面清单

| 文件 | 说明 | page-frame | .wrap 1440px |
|---|---|---|---|
| `index.html` | 主页（标准参考） | ✅ | — |
| `lumenshop.html` | LumenShop 产品页 | ✅ | ✅ |
| `shopify-app.html` | Shopify App 产品页 | ✅ | ✅ |
| `About Us_page.html` | 关于我们 | ✅ | — |
| `Book a Demo.html` | 预约演示表单 | ✅ | — |
| `Contact_page.html` | 联系我们表单 | ✅ | — |

---

## 快速自查清单

新建或修改页面时，检查以下各项：

- [ ] `<body>` 顶部有 `<div class="page-frame"></div>` 和 `<div class="banner-mask"></div>`
- [ ] 背景色为 `#faf8f4`，无白色 `#fff` 大面积背景块
- [ ] `.wrap` 或 section padding 左右为 `80px`（桌面）
- [ ] 一级标题 `44px / 600 / line-height 1.15 / letter-spacing -0.5px`
- [ ] 渐变方向统一 `180deg`
- [ ] 正文 `16px / #8c8884 / line-height 1.7`
- [ ] `.btn-primary` padding `11px 24px`，font-size `14px`，有 box-shadow
- [ ] `.btn-ghost` padding `11px 24px`，font-size `14px`
- [ ] 已添加 `≤1099px → 36px`、`≤900px → 28px`、`≤480px → 22px` 标题断点
- [ ] 标题使用 Title Case（首字母大写）
