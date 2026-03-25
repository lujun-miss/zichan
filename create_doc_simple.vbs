Set word = CreateObject("Word.Application")
word.Visible = False

Set document = word.Documents.Add()
Set selection = word.Selection

selection.TypeText("资产管理OA系统需求方案书")
selection.TypeParagraph()
selection.TypeParagraph()

selection.TypeText("1. 项目概述")
selection.TypeParagraph()
selection.TypeText("1.1 项目背景")
selection.TypeParagraph()
selection.TypeText("随着交通集团资产规模的不断扩大，资产管理工作面临着日益复杂的挑战。")
selection.TypeParagraph()

selection.TypeText("1.2 项目目标")
selection.TypeParagraph()
selection.TypeText("1. 建立统一的资产管理平台")
selection.TypeParagraph()
selection.TypeText("2. 优化资产管理流程")
selection.TypeParagraph()
selection.TypeText("3. 实现资产的动态监控")
selection.TypeParagraph()
selection.TypeText("4. 支持多维度的资产报表")
selection.TypeParagraph()
selection.TypeText("5. 建立完善的用户权限管理体系")
selection.TypeParagraph()

selection.TypeText("2. 功能需求")
selection.TypeParagraph()
selection.TypeText("2.1 系统主页")
selection.TypeParagraph()
selection.TypeText("系统导航、用户信息显示、内容区域")
selection.TypeParagraph()

selection.TypeText("2.2 首页管理")
selection.TypeParagraph()
selection.TypeText("资产概览、筛选功能、图表展示")
selection.TypeParagraph()

selection.TypeText("2.3 单位管理")
selection.TypeParagraph()
selection.TypeText("单位列表管理、单位详情、资产列表")
selection.TypeParagraph()

selection.TypeText("2.4 资产统计")
selection.TypeParagraph()
selection.TypeText("多维度筛选、资产列表展示")
selection.TypeParagraph()

selection.TypeText("2.5 报表统计")
selection.TypeParagraph()
selection.TypeText("报表类型切换、时间筛选、核心指标")
selection.TypeParagraph()

selection.TypeText("2.6 用户管理")
selection.TypeParagraph()
selection.TypeText("用户列表管理、用户操作、权限控制")
selection.TypeParagraph()

selection.TypeText("2.7 角色管理")
selection.TypeParagraph()
selection.TypeText("角色列表管理、角色操作、权限设置")
selection.TypeParagraph()

selection.TypeText("3. 技术实现")
selection.TypeParagraph()
selection.TypeText("前端技术：HTML5 + CSS3 + JavaScript")
selection.TypeParagraph()
selection.TypeText("框架：Tailwind CSS")
selection.TypeParagraph()
selection.TypeText("图标库：FontAwesome")
selection.TypeParagraph()

selection.TypeText("4. 项目实施计划")
selection.TypeParagraph()
selection.TypeText("需求分析与设计阶段")
selection.TypeParagraph()
selection.TypeText("前端开发阶段")
selection.TypeParagraph()
selection.TypeText("后端开发阶段")
selection.TypeParagraph()
selection.TypeText("测试阶段")
selection.TypeParagraph()
selection.TypeText("部署上线阶段")
selection.TypeParagraph()

selection.TypeText("5. 结论")
selection.TypeParagraph()
selection.TypeText("该系统将显著提高资产管理效率，实现规范化和智能化管理。")
selection.TypeParagraph()

document.SaveAs("d:\工具\Trae\zichan\需求方案书.doc")
document.Close()
word.Quit()

Set document = Nothing
Set selection = Nothing
Set word = Nothing

WScript.Echo "Word文档已生成"