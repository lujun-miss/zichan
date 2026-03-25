Set word = CreateObject("Word.Application")
word.Visible = False

Set document = word.Documents.Add()
Set selection = word.Selection

' 设置标题样式
selection.Style = "标题 1"
selection.TypeText("资产管理OA系统需求方案书")
selection.TypeParagraph()

' 1. 项目概述
selection.Style = "标题 2"
selection.TypeText("1. 项目概述")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("1.1 项目背景")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("随着交通集团资产规模的不断扩大，资产管理工作面临着日益复杂的挑战。传统的资产管理方式已经无法满足现代化管理的需求，需要建立一个集中化、规范化、智能化的资产管理OA系统，实现资产的全生命周期管理。")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("1.2 项目目标")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("1. 建立统一的资产管理平台，实现资产信息的集中管理")
selection.TypeParagraph()
selection.TypeText("2. 优化资产管理流程，提高管理效率和决策水平")
selection.TypeParagraph()
selection.TypeText("3. 实现资产的动态监控和实时统计分析")
selection.TypeParagraph()
selection.TypeText("4. 支持多维度的资产报表生成和数据导出")
selection.TypeParagraph()
selection.TypeText("5. 建立完善的用户权限管理体系")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("1.3 系统架构")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("系统采用HTML+Tailwind CSS构建现代化界面，使用模块化JavaScript实现交互功能，通过iframe嵌套实现页面切换。系统采用响应式设计，适配桌面端和移动端设备。")
selection.TypeParagraph()

' 2. 功能需求
selection.Style = "标题 2"
selection.TypeText("2. 功能需求")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("2.1 系统主页")
selection.TypeParagraph()
selection.Style = "标题 4"
selection.TypeText("功能模块")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 系统导航：左侧固定导航菜单，包含系统所有功能模块入口")
selection.TypeParagraph()
selection.TypeText("- 用户信息：顶部显示当前登录用户信息")
selection.TypeParagraph()
selection.TypeText("- 内容区域：使用iframe加载各功能页面")
selection.TypeParagraph()
selection.TypeText("- 响应式设计：适配不同屏幕尺寸")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("2.2 首页管理")
selection.TypeParagraph()
selection.Style = "标题 4"
selection.TypeText("功能模块")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 资产概览：显示核心统计指标卡片")
selection.TypeParagraph()
selection.TypeText("- 筛选功能：支持按年度、季度、月度筛选")
selection.TypeParagraph()
selection.TypeText("- 图表展示：资产出租率趋势图、资产状态分布图")
selection.TypeParagraph()
selection.TypeText("- 最近资产动态：展示最近更新的资产信息")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("2.3 单位管理")
selection.TypeParagraph()
selection.Style = "标题 4"
selection.TypeText("功能模块")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 单位列表管理：显示单位卡片，支持搜索")
selection.TypeParagraph()
selection.TypeText("- 单位详情：显示单位基本信息和资产统计")
selection.TypeParagraph()
selection.TypeText("- 资产列表管理：显示单位所属资产")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("2.4 资产统计")
selection.TypeParagraph()
selection.Style = "标题 4"
selection.TypeText("功能模块")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 多维度筛选：单位、类型、状态、出租属性")
selection.TypeParagraph()
selection.TypeText("- 资产列表展示：按单位分组展示")
selection.TypeParagraph()
selection.TypeText("- 批量操作：展开/收起、导出功能")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("2.5 报表统计")
selection.TypeParagraph()
selection.Style = "标题 4"
selection.TypeText("功能模块")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 报表类型切换：年度、半年度、季度")
selection.TypeParagraph()
selection.TypeText("- 时间筛选：年份选择、季度选择")
selection.TypeParagraph()
selection.TypeText("- 核心指标卡片：总资产数量、出租率、盘活资产")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("2.6 用户管理")
selection.TypeParagraph()
selection.Style = "标题 4"
selection.TypeText("功能模块")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 用户列表管理：显示用户基本信息")
selection.TypeParagraph()
selection.TypeText("- 用户操作：创建、编辑、启用/禁用")
selection.TypeParagraph()
selection.TypeText("- 权限控制：超级管理员、单位管理员")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("2.7 角色管理")
selection.TypeParagraph()
selection.Style = "标题 4"
selection.TypeText("功能模块")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 角色列表管理：显示角色基本信息")
selection.TypeParagraph()
selection.TypeText("- 角色操作：创建、编辑、删除")
selection.TypeParagraph()
selection.TypeText("- 权限设置：精细的权限控制")
selection.TypeParagraph()

' 3. 非功能需求
selection.Style = "标题 2"
selection.TypeText("3. 非功能需求")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("3.1 性能需求")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 页面加载时间不超过2秒")
selection.TypeParagraph()
selection.TypeText("- 支持至少100个并发用户访问")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("3.2 安全性需求")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 用户认证和授权机制")
selection.TypeParagraph()
selection.TypeText("- 数据传输加密")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("3.3 可用性需求")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 系统可用性达到99.9%")
selection.TypeParagraph()
selection.TypeText("- 支持7×24小时运行")
selection.TypeParagraph()

' 4. 技术实现
selection.Style = "标题 2"
selection.TypeText("4. 技术实现")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("4.1 前端技术栈")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- HTML5 + CSS3 + JavaScript")
selection.TypeParagraph()
selection.TypeText("- Tailwind CSS：现代化UI框架")
selection.TypeParagraph()
selection.TypeText("- FontAwesome：图标库")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("4.2 系统架构")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 单页面应用架构")
selection.TypeParagraph()
selection.TypeText("- iframe嵌套实现页面切换")
selection.TypeParagraph()

' 5. 项目实施计划
selection.Style = "标题 2"
selection.TypeText("5. 项目实施计划")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("5.1 项目阶段")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("1. 需求分析与设计阶段")
selection.TypeParagraph()
selection.TypeText("2. 前端开发阶段")
selection.TypeParagraph()
selection.TypeText("3. 后端开发阶段")
selection.TypeParagraph()
selection.TypeText("4. 测试阶段")
selection.TypeParagraph()
selection.TypeText("5. 部署上线阶段")
selection.TypeParagraph()

' 6. 验收标准
selection.Style = "标题 2"
selection.TypeText("6. 验收标准")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("6.1 功能验收")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 所有功能模块按照需求文档实现")
selection.TypeParagraph()
selection.TypeText("- 交互功能符合设计要求")
selection.TypeParagraph()

' 7. 风险评估
selection.Style = "标题 2"
selection.TypeText("7. 风险评估")
selection.TypeParagraph()

selection.Style = "标题 3"
selection.TypeText("7.1 技术风险")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("- 数据量增长可能影响系统性能")
selection.TypeParagraph()
selection.TypeText("- 浏览器兼容性问题")
selection.TypeParagraph()

' 8. 结论
selection.Style = "标题 2"
selection.TypeText("8. 结论")
selection.TypeParagraph()
selection.Style = "正文"
selection.TypeText("本需求方案书详细描述了资产管理OA系统的功能需求、非功能需求、技术实现方案和项目实施计划。系统采用现代化的前端技术栈，实现了资产的全生命周期管理。")
selection.TypeParagraph()
selection.TypeText("该系统的实施将显著提高资产管理效率，为决策提供数据支持，实现资产管理的规范化和智能化。")
selection.TypeParagraph()

' 保存文档
document.SaveAs("d:\工具\Trae\zichan\需求方案书.doc")
document.Close()
word.Quit()

Set document = Nothing
Set selection = Nothing
Set word = Nothing

WScript.Echo "Word文档已生成：d:\工具\Trae\zichan\需求方案书.doc"