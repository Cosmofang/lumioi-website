# Deeplumen Blog 内容发布指南

> 适用人员：内容编辑、市场团队、AI Agent  
> 更新日期：2026-04-22  
> 博客地址：https://lumioi.com/blog

---

## 方案说明

本文档提供两套操作方案，根据你的情况选择：

| | 方案 A | 方案 B |
|--|--------|--------|
| **适合谁** | 受邀加入公司 Notion 的员工 | 使用自己 Notion 账号的外部协作者 |
| **Notion 账号** | 公司共享工作区 | 自己的 Notion 账号 |
| **操作复杂度** | 简单 | 需要一次性配置 |
| **权限管理** | 由管理员统一控制 | 独立账号，需手动授权 |

---

# 方案 A：通过公司 Notion 写博客（推荐）

> 适用于已被邀请进入 Deeplumen Notion 工作区的员工

## 系统流程

```
在公司 Notion 数据库写文章
      ↓
Status 改为 Published
      ↓
5 分钟内自动上线 lumioi.com/blog
```

## 第一步：打开博客数据库

点击以下链接（需要先登录公司 Notion 账号）：

**[→ Lumioi Blog Posts 数据库](https://www.notion.so/Lumioi-Blog-Posts-34a501eb88a9805a9003fd814ed90289)**

## 第二步：新建文章

点击表格左下角 **`+ New`**，新建一行。

## 第三步：填写文章属性

点击新建的行，填写以下字段：

| 字段 | 必填 | 说明 | 示例 |
|------|------|------|------|
| **Title** | ✅ | 文章标题 | `How AI is Changing E-commerce` |
| **Slug** | ✅ | URL 路径，英文小写+连字符 | `how-ai-changing-ecommerce` |
| **Summary** | ✅ | 摘要，100字以内 | `AI is transforming how brands...` |
| **Status** | ✅ | 草稿期间填 Draft，写完改 Published | `Draft` |
| **Date** | ✅ | 发布日期 | `2026-04-22` |
| **Category** | 推荐 | 分类 | `Product` / `Tutorial` / `News` / `Case Study` |
| **Tags** | 可选 | 标签（可多选） | `AI`, `Marketing` |
| **Author** | 推荐 | 你的名字 | `Zhang Wei` |

### 封面图（Cover）

每篇文章可以在 Notion 页面顶部设置封面图：打开文章页面 → 点击右上角 `···` → **Add cover** → 选择 **Link**，粘贴图片 URL。

**默认封面（无自定义图片时使用）：**
```
https://lumioi.com/logo/image/blog_1.jpg
```

> 新建文章请手动添加此封面，或上传你自己的封面图片替换。

### Slug 命名规则
- ✅ `ai-marketing-guide-2026`
- ✅ `how-to-use-wdt-tool`
- ❌ `AI Marketing Guide`（不能有大写/空格）
- ❌ `如何写博客`（不能用中文）

## 第四步：写正文

字段填完后，在页面下方**正文区域**直接写内容。

### 支持格式

| 格式 | Notion 操作 |
|------|------------|
| 二级标题 | 输入 `/Heading 2` |
| 三级标题 | 输入 `/Heading 3` |
| 加粗 | 选中 → `Cmd+B` |
| 列表 | 输入 `/Bulleted list` |
| 引用 | 输入 `/Quote` |
| 图片 | 输入 `/Image` → 粘贴图片 URL |
| 提示框 | 输入 `/Callout` |
| 分割线 | 输入 `/Divider` |

### 推荐文章结构
```
## 引言（说明文章解决什么问题）
## 背景（2-3段）
## 核心内容（分小节展开）
## 总结
```

## 第五步：发布

1. 找到 **Status** 字段
2. 改为 **`Published`**
3. 等待约 5 分钟
4. 访问 `https://lumioi.com/blog/你的slug` 确认上线

---

# 方案 B：用自己的 Notion 接入 Deeplumen 博客后台

> 适用于使用独立 Notion 账号的外部协作者或自由撰稿人

## 系统流程

```
管理员将你的 Notion 账号加入数据库协作者
      ↓
你在自己的 Notion 账号里看到并编辑数据库
      ↓
Status 改为 Published → 自动上线
```

## 一次性配置（管理员操作）

> 以下操作由 **Deeplumen 管理员** 完成，员工无需操作

1. 打开 **[Lumioi Blog Posts 数据库](https://www.notion.so/Lumioi-Blog-Posts-34a501eb88a9805a9003fd814ed90289)**
2. 右上角点 **Share**
3. 在邀请框输入员工的 **Notion 邮箱**
4. 权限选择 **Can edit**（可编辑）或 **Can comment**（仅评论）
5. 点击 **Invite**

## 员工操作步骤

### 1. 接受邀请
- 检查邮箱，收到 Notion 邀请邮件
- 点击 **Accept invite**
- 用自己的 Notion 账号登录

### 2. 找到数据库
邀请接受后，数据库会出现在你 Notion 的：
- **Shared** 区域（左侧边栏）
- 或直接点链接：[Lumioi Blog Posts](https://www.notion.so/Lumioi-Blog-Posts-34a501eb88a9805a9003fd814ed90289)

### 3. 写文章
操作方式与**方案 A 完全一致**，参考方案 A 的第三、四、五步。

---

# 通用注意事项

1. **Slug 发布后不要修改**，否则原链接失效
2. **图片用外链**：Notion 内置图片有时效，推荐上传到 Imgur 或公司 CDN 后粘贴 URL
3. **缓存延迟**：文章发布后约 5 分钟显示，属正常现象
4. **下线文章**：Status 改为 `Archived` 即可，内容保留在 Notion

## 发布前检查清单

- [ ] Title 已填写
- [ ] Slug 已填写（英文小写+连字符，无空格）
- [ ] Summary 已填写（100字以内）
- [ ] Date 已选择
- [ ] 正文内容已写完
- [ ] Status 改为 **Published** ✅

---

## 遇到问题？

联系技术支持时请提供：
- 文章标题
- Notion 页面链接
- 问题截图
