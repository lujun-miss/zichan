$word = New-Object -ComObject Word.Application
$word.Visible = $false

$document = $word.Documents.Add()

$selection = $word.Selection

# 设置标题样式
$selection.Style = "标题 1"
$selection.TypeText("资产管理OA系统需求方案书")
$selection.TypeParagraph()

# 1. 项目概述
$selection.Style = "标题 2"
$selection.TypeText("1. 项目概述")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("1.1 项目背景")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("随着交通集团资产规模的不断扩大，资产管理工作面临着日益复杂的挑战。传统的资产管理方式已经无法满足现代化管理的需求，需要建立一个集中化、规范化、智能化的资产管理OA系统，实现资产的全生命周期管理。")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("1.2 项目目标")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("1. 建立统一的资产管理平台，实现资产信息的集中管理")
$selection.TypeParagraph()
$selection.TypeText("2. 优化资产管理流程，提高管理效率和决策水平")
$selection.TypeParagraph()
$selection.TypeText("3. 实现资产的动态监控和实时统计分析")
$selection.TypeParagraph()
$selection.TypeText("4. 支持多维度的资产报表生成和数据导出")
$selection.TypeParagraph()
$selection.TypeText("5. 建立完善的用户权限管理体系")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("1.3 系统架构")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("系统采用HTML+Tailwind CSS构建现代化界面，使用模块化JavaScript实现交互功能，通过iframe嵌套实现页面切换。系统采用响应式设计，适配桌面端和移动端设备。")
$selection.TypeParagraph()

# 2. 功能需求
$selection.Style = "标题 2"
$selection.TypeText("2. 功能需求")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("2.1 系统主页 (index.html)")
$selection.TypeParagraph()
$selection.Style = "标题 4"
$selection.TypeText("功能模块")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 系统导航：左侧固定导航菜单，包含系统所有功能模块入口")
$selection.TypeParagraph()
$selection.TypeText("- 用户信息：顶部显示当前登录用户信息，包括用户名和邮箱")
$selection.TypeParagraph()
$selection.TypeText("- 内容区域：使用iframe加载各功能页面，实现无刷新页面切换")
$selection.TypeParagraph()
$selection.TypeText("- 响应式设计：适配不同屏幕尺寸，移动端支持菜单折叠")
$selection.TypeParagraph()

$selection.Style = "标题 4"
$selection.TypeText("导航菜单结构")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 首页管理")
$selection.TypeParagraph()
$selection.TypeText("- 单位管理")
$selection.TypeParagraph()
$selection.TypeText("- 资产信息（子菜单：各单位列表）")
$selection.TypeParagraph()
$selection.TypeText("- 报表统计（子菜单：统计报表、资产统计）")
$selection.TypeParagraph()
$selection.TypeText("- 用户管理")
$selection.TypeParagraph()
$selection.TypeText("- 角色管理")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("2.2 首页管理 (home.html)")
$selection.TypeParagraph()
$selection.Style = "标题 4"
$selection.TypeText("功能模块")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 资产概览：显示核心统计指标卡片")
$selection.TypeParagraph()
$selection.TypeText("  - 总资产数量：各单位资产数量总和")
$selection.TypeParagraph()
$selection.TypeText("  - 出租率：已出租资产数量 ÷ 总资产数量 × 100%")
$selection.TypeParagraph()
$selection.TypeText("  - 闲置资产：出租属性且状态为"闲置中"的资产数量")
$selection.TypeParagraph()
$selection.TypeText("  - 盘活资产：上一周期出租属性闲置资产数量 - 本周期出租属性闲置资产数量")
$selection.TypeParagraph()
$selection.TypeText("- 筛选功能：支持按年度、季度、月度进行数据筛选")
$selection.TypeParagraph()
$selection.TypeText("  - 年度筛选：选择具体年份（2022-2026年）")
$selection.TypeParagraph()
$selection.TypeText("  - 季度筛选：选择具体季度（Q1-Q4）")
$selection.TypeParagraph()
$selection.TypeText("  - 月度筛选：选择具体月份（1-12月）")
$selection.TypeParagraph()
$selection.TypeText("- 图表展示：")
$selection.TypeParagraph()
$selection.TypeText("  - 资产出租率趋势图：展示不同周期的出租率变化")
$selection.TypeParagraph()
$selection.TypeText("  - 资产状态分布图：展示当前资产状态分布情况")
$selection.TypeParagraph()
$selection.TypeText("- 最近资产动态：展示最近更新的资产信息，包括资产名称、所属单位、状态、更新时间等")
$selection.TypeParagraph()

$selection.Style = "标题 4"
$selection.TypeText("交互功能")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 点击统计卡片可查看详细资产信息")
$selection.TypeParagraph()
$selection.TypeText("- 问号图标悬停显示计算公式和备注说明")
$selection.TypeParagraph()
$selection.TypeText("- 点击问号图标弹出详细说明模态框")
$selection.TypeParagraph()
$selection.TypeText("- 筛选条件变更后实时更新统计数据和图表")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("2.3 单位管理 (units.html)")
$selection.TypeParagraph()
$selection.Style = "标题 4"
$selection.TypeText("功能模块")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 单位列表管理：")
$selection.TypeParagraph()
$selection.TypeText("  - 显示单位卡片列表，包含单位基本信息")
$selection.TypeParagraph()
$selection.TypeText("  - 支持单位名称模糊搜索")
$selection.TypeParagraph()
$selection.TypeText("  - 添加新单位功能")
$selection.TypeParagraph()
$selection.TypeText("- 单位详情：")
$selection.TypeParagraph()
$selection.TypeText("  - 单位基本信息展示（名称、类型、负责人、联系电话等）")
$selection.TypeParagraph()
$selection.TypeText("  - 单位资产统计信息（总资产数量、出租率、闲置资产等）")
$selection.TypeParagraph()
$selection.TypeText("  - 创建单位管理员账号功能")
$selection.TypeParagraph()
$selection.TypeText("- 资产列表管理：")
$selection.TypeParagraph()
$selection.TypeText("  - 显示单位所属资产列表")
$selection.TypeParagraph()
$selection.TypeText("  - 支持资产名称搜索和状态筛选")
$selection.TypeParagraph()
$selection.TypeText("  - 添加新资产功能")
$selection.TypeParagraph()

$selection.Style = "标题 4"
$selection.TypeText("添加资产表单字段")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 资产名称（必填）")
$selection.TypeParagraph()
$selection.TypeText("- 资产类型（必填）：房屋建筑、土地、设备")
$selection.TypeParagraph()
$selection.TypeText("- 面积")
$selection.TypeParagraph()
$selection.TypeText("- 出租属性（必填）：出租、非出租")
$selection.TypeParagraph()
$selection.TypeText("- 资产状态（必填）：已出租、闲置中、维修中、自用")
$selection.TypeParagraph()
$selection.TypeText("- 支付周期（条件显示）：月付、季付、年付")
$selection.TypeParagraph()
$selection.TypeText("- 租金金额（条件显示）")
$selection.TypeParagraph()

$selection.Style = "标题 4"
$selection.TypeText("交互逻辑")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 选择出租属性时，动态显示支付周期和租金金额字段")
$selection.TypeParagraph()
$selection.TypeText("- 单位卡片支持点击查看详情")
$selection.TypeParagraph()
$selection.TypeText("- 资产列表支持分页显示")
$selection.TypeParagraph()
$selection.TypeText("- 搜索功能实时过滤单位和资产")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("2.4 资产统计 (asset_stats.html)")
$selection.TypeParagraph()
$selection.Style = "标题 4"
$selection.TypeText("功能模块")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 多维度筛选：")
$selection.TypeParagraph()
$selection.TypeText("  - 单位筛选：全部单位或指定单位")
$selection.TypeParagraph()
$selection.TypeText("  - 资产类型筛选：房屋建筑、土地、设备设施、其他")
$selection.TypeParagraph()
$selection.TypeText("  - 资产状态筛选：已出租、闲置中、维修中、自用")
$selection.TypeParagraph()
$selection.TypeText("  - 出租属性筛选：出租属性、非出租属性")
$selection.TypeParagraph()
$selection.TypeText("- 资产列表展示：")
$selection.TypeParagraph()
$selection.TypeText("  - 按单位分组展示资产信息")
$selection.TypeParagraph()
$selection.TypeText("  - 支持单位展开/收起功能")
$selection.TypeParagraph()
$selection.TypeText("  - 显示资产详细信息（名称、类型、面积、状态、出租属性、租金）")
$selection.TypeParagraph()
$selection.TypeText("- 批量操作：")
$selection.TypeParagraph()
$selection.TypeText("  - 全部展开/收起功能")
$selection.TypeParagraph()
$selection.TypeText("  - 导出资产列表功能")
$selection.TypeParagraph()

$selection.Style = "标题 4"
$selection.TypeText("交互功能")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 筛选条件变更时实时更新资产列表")
$selection.TypeParagraph()
$selection.TypeText("- 点击单位标题可展开/收起该单位的资产列表")
$selection.TypeParagraph()
$selection.TypeText("- 支持批量操作提高管理效率")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("2.5 报表统计 (reports.html)")
$selection.TypeParagraph()
$selection.Style = "标题 4"
$selection.TypeText("功能模块")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 报表类型切换：")
$selection.TypeParagraph()
$selection.TypeText("  - 年度报表：全年数据统计（1月1日-12月31日）")
$selection.TypeParagraph()
$selection.TypeText("  - 半年度报表：上半年数据统计（1月1日-6月30日）")
$selection.TypeParagraph()
$selection.TypeText("  - 季度报表：具体季度数据统计（如Q1:1-3月）")
$selection.TypeParagraph()
$selection.TypeText("- 时间筛选：")
$selection.TypeParagraph()
$selection.TypeText("  - 年份选择：2022-2024年")
$selection.TypeParagraph()
$selection.TypeText("  - 季度选择：Q1-Q4（仅季度报表显示）")
$selection.TypeParagraph()
$selection.TypeText("- 核心指标卡片：")
$selection.TypeParagraph()
$selection.TypeText("  - 总资产数量及同比增长")
$selection.TypeParagraph()
$selection.TypeText("  - 出租率及同比提升")
$selection.TypeParagraph()
$selection.TypeText("  - 盘活资产数量及同比变化")
$selection.TypeParagraph()
$selection.TypeText("- 详细数据报表：")
$selection.TypeParagraph()
$selection.TypeText("  - 年度报表：显示2024年vs2023年的各项指标对比")
$selection.TypeParagraph()
$selection.TypeText("  - 半年度报表：显示2024年上半年vs2023年上半年的对比")
$selection.TypeParagraph()
$selection.TypeText("  - 季度报表：显示当前季度vs上一季度的环比对比")
$selection.TypeParagraph()

$selection.Style = "标题 4"
$selection.TypeText("计算公式")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 出租率 = 已出租资产数量 ÷ 出租属性资产总数量 × 100%")
$selection.TypeParagraph()
$selection.TypeText("- 闲置率 = 闲置资产数量 ÷ 总资产数量 × 100%")
$selection.TypeParagraph()
$selection.TypeText("- 盘活资产数量 = 去年出租属性的闲置资产 - 今年出租属性的闲置资产")
$selection.TypeParagraph()
$selection.TypeText("- 盘活资产转化率 = 出租属性的盘活资产 ÷ 出租属性的闲置资产总量")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("2.6 用户管理 (users.html)")
$selection.TypeParagraph()
$selection.Style = "标题 4"
$selection.TypeText("功能模块")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 用户列表管理：")
$selection.TypeParagraph()
$selection.TypeText("  - 显示用户基本信息（单位、账号、姓名、联系电话、权限等级、状态）")
$selection.TypeParagraph()
$selection.TypeText("  - 支持按账号、单位、状态进行筛选")
$selection.TypeParagraph()
$selection.TypeText("  - 支持账号搜索功能")
$selection.TypeParagraph()
$selection.TypeText("- 用户操作：")
$selection.TypeParagraph()
$selection.TypeText("  - 创建账号功能")
$selection.TypeParagraph()
$selection.TypeText("  - 编辑用户信息功能")
$selection.TypeParagraph()
$selection.TypeText("  - 启用/禁用账号功能")
$selection.TypeParagraph()
$selection.TypeText("- 权限控制：")
$selection.TypeParagraph()
$selection.TypeText("  - 超级管理员：可管理所有用户和角色")
$selection.TypeParagraph()
$selection.TypeText("  - 单位管理员：只能管理本单位用户，且只能创建操作员和查看员角色")
$selection.TypeParagraph()

$selection.Style = "标题 4"
$selection.TypeText("用户角色体系")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 超级管理员：拥有系统所有权限")
$selection.TypeParagraph()
$selection.TypeText("- 单位管理员：管理本单位的资产和用户")
$selection.TypeParagraph()
$selection.TypeText("- 单位操作员：操作本单位资产")
$selection.TypeParagraph()
$selection.TypeText("- 单位查看员：查看本单位资产")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("2.7 角色管理 (roles.html)")
$selection.TypeParagraph()
$selection.Style = "标题 4"
$selection.TypeText("功能模块")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 角色列表管理：")
$selection.TypeParagraph()
$selection.TypeText("  - 显示角色基本信息（名称、描述）")
$selection.TypeParagraph()
$selection.TypeText("  - 支持角色搜索功能")
$selection.TypeParagraph()
$selection.TypeText("- 角色操作：")
$selection.TypeParagraph()
$selection.TypeText("  - 创建角色功能（仅超级管理员）")
$selection.TypeParagraph()
$selection.TypeText("  - 编辑角色功能（仅超级管理员）")
$selection.TypeParagraph()
$selection.TypeText("  - 删除角色功能（仅超级管理员，系统内置角色不可删除）")
$selection.TypeParagraph()
$selection.TypeText("- 权限设置：")
$selection.TypeParagraph()
$selection.TypeText("  - 首页管理权限：查看首页统计、导出统计数据")
$selection.TypeParagraph()
$selection.TypeText("  - 单位管理权限：查看单位列表、添加单位、编辑单位、删除单位")
$selection.TypeParagraph()
$selection.TypeText("  - 资产信息权限：查看资产列表、添加资产、编辑资产、删除资产、导入资产、导出资产")
$selection.TypeParagraph()
$selection.TypeText("  - 报表统计权限：查看报表、导出报表、打印报表")
$selection.TypeParagraph()
$selection.TypeText("  - 用户管理权限：查看用户列表、添加用户、编辑用户、删除用户、重置密码")
$selection.TypeParagraph()
$selection.TypeText("  - 角色管理权限：查看角色列表、添加角色、编辑角色、删除角色")
$selection.TypeParagraph()

# 3. 非功能需求
$selection.Style = "标题 2"
$selection.TypeText("3. 非功能需求")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("3.1 性能需求")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 页面加载时间不超过2秒")
$selection.TypeParagraph()
$selection.TypeText("- 支持至少100个并发用户访问")
$selection.TypeParagraph()
$selection.TypeText("- 数据查询响应时间不超过1秒")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("3.2 安全性需求")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 用户认证和授权机制")
$selection.TypeParagraph()
$selection.TypeText("- 数据传输加密")
$selection.TypeParagraph()
$selection.TypeText("- 防止SQL注入和XSS攻击")
$selection.TypeParagraph()
$selection.TypeText("- 定期数据备份")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("3.3 可用性需求")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 系统可用性达到99.9%")
$selection.TypeParagraph()
$selection.TypeText("- 支持7×24小时运行")
$selection.TypeParagraph()
$selection.TypeText("- 提供友好的错误提示和异常处理")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("3.4 兼容性需求")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 支持主流浏览器（Chrome、Firefox、Safari、Edge）")
$selection.TypeParagraph()
$selection.TypeText("- 响应式设计，适配桌面端和移动端")
$selection.TypeParagraph()
$selection.TypeText("- 支持不同屏幕分辨率")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("3.5 可维护性需求")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 模块化设计，便于扩展和维护")
$selection.TypeParagraph()
$selection.TypeText("- 清晰的代码结构和注释")
$selection.TypeParagraph()
$selection.TypeText("- 完善的文档支持")
$selection.TypeParagraph()

# 4. 技术实现
$selection.Style = "标题 2"
$selection.TypeText("4. 技术实现")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("4.1 前端技术栈")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- HTML5 + CSS3 + JavaScript")
$selection.TypeParagraph()
$selection.TypeText("- Tailwind CSS：现代化UI框架")
$selection.TypeParagraph()
$selection.TypeText("- FontAwesome：图标库")
$selection.TypeParagraph()
$selection.TypeText("- Chart.js：数据可视化图表")
$selection.TypeParagraph()
$selection.TypeText("- 响应式设计：适配不同设备")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("4.2 系统架构")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 单页面应用架构")
$selection.TypeParagraph()
$selection.TypeText("- iframe嵌套实现页面切换")
$selection.TypeParagraph()
$selection.TypeText("- 模块化JavaScript设计")
$selection.TypeParagraph()
$selection.TypeText("- 动态DOM操作实现内容更新")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("4.3 数据管理")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 前端数据模拟（实际项目中应连接后端数据库）")
$selection.TypeParagraph()
$selection.TypeText("- 本地存储用于临时数据缓存")
$selection.TypeParagraph()
$selection.TypeText("- 表单验证和数据校验")
$selection.TypeParagraph()

# 5. 项目实施计划
$selection.Style = "标题 2"
$selection.TypeText("5. 项目实施计划")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("5.1 项目阶段")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("1. 需求分析与设计阶段：完成需求调研和系统设计")
$selection.TypeParagraph()
$selection.TypeText("2. 前端开发阶段：实现各功能模块的前端界面")
$selection.TypeParagraph()
$selection.TypeText("3. 后端开发阶段：实现数据存储和业务逻辑")
$selection.TypeParagraph()
$selection.TypeText("4. 测试阶段：功能测试、性能测试、安全测试")
$selection.TypeParagraph()
$selection.TypeText("5. 部署上线阶段：系统部署和用户培训")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("5.2 关键里程碑")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 需求文档完成：第1周")
$selection.TypeParagraph()
$selection.TypeText("- 前端界面完成：第4周")
$selection.TypeParagraph()
$selection.TypeText("- 后端功能完成：第6周")
$selection.TypeParagraph()
$selection.TypeText("- 系统测试完成：第7周")
$selection.TypeParagraph()
$selection.TypeText("- 系统上线：第8周")
$selection.TypeParagraph()

# 6. 验收标准
$selection.Style = "标题 2"
$selection.TypeText("6. 验收标准")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("6.1 功能验收")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 所有功能模块按照需求文档实现")
$selection.TypeParagraph()
$selection.TypeText("- 交互功能符合设计要求")
$selection.TypeParagraph()
$selection.TypeText("- 数据计算准确无误")
$selection.TypeParagraph()
$selection.TypeText("- 权限控制有效")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("6.2 性能验收")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 页面加载时间符合要求")
$selection.TypeParagraph()
$selection.TypeText("- 并发用户支持符合要求")
$selection.TypeParagraph()
$selection.TypeText("- 数据查询响应时间符合要求")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("6.3 安全验收")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 用户认证和授权机制有效")
$selection.TypeParagraph()
$selection.TypeText("- 数据传输加密有效")
$selection.TypeParagraph()
$selection.TypeText("- 防止常见安全漏洞")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("6.4 兼容性验收")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 支持所有主流浏览器")
$selection.TypeParagraph()
$selection.TypeText("- 响应式设计适配不同设备")
$selection.TypeParagraph()
$selection.TypeText("- 界面显示正常无错位")
$selection.TypeParagraph()

# 7. 风险评估
$selection.Style = "标题 2"
$selection.TypeText("7. 风险评估")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("7.1 技术风险")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 数据量增长可能影响系统性能")
$selection.TypeParagraph()
$selection.TypeText("- 浏览器兼容性问题")
$selection.TypeParagraph()
$selection.TypeText("- 前端框架升级风险")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("7.2 业务风险")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 用户需求变更可能导致范围蔓延")
$selection.TypeParagraph()
$selection.TypeText("- 数据迁移风险")
$selection.TypeParagraph()
$selection.TypeText("- 用户接受度风险")
$selection.TypeParagraph()

$selection.Style = "标题 3"
$selection.TypeText("7.3 管理风险")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("- 项目进度延迟风险")
$selection.TypeParagraph()
$selection.TypeText("- 资源不足风险")
$selection.TypeParagraph()
$selection.TypeText("- 沟通协调风险")
$selection.TypeParagraph()

# 8. 结论
$selection.Style = "标题 2"
$selection.TypeText("8. 结论")
$selection.TypeParagraph()
$selection.Style = "正文"
$selection.TypeText("本需求方案书详细描述了资产管理OA系统的功能需求、非功能需求、技术实现方案和项目实施计划。系统采用现代化的前端技术栈，实现了资产的全生命周期管理，支持多维度的数据统计和分析。通过建立完善的用户权限管理体系，确保系统的安全性和可靠性。")
$selection.TypeParagraph()
$selection.TypeText("该系统的实施将显著提高资产管理效率，为决策提供数据支持，实现资产管理的规范化和智能化。")
$selection.TypeParagraph()

# 保存文档
$document.SaveAs("d:\工具\Trae\zichan\需求方案书.doc")
$document.Close()
$word.Quit()

# 清理COM对象
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($document) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
Remove-Variable word, document, selection

Write-Host "Word文档已生成：d:\工具\Trae\zichan\需求方案书.doc"