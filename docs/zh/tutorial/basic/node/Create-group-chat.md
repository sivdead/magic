# 创建群聊节点
## 什么是创建群聊节点？
创建群聊节点是 Magic Flow 中专门用于创建多人聊天群组的功能节点。通过该节点，您可以在工作流程中自动创建各类型的群聊，如内部工作群、项目群、培训群等，并可自动添加指定成员。就像您在日常使用的社交软件中手动创建群聊一样，但这一过程可以在工作流中自动完成。

**图片说明：**

创建群聊节点界面包含群名称、群主、群成员、群类型等配置项，以及将当前用户和助理添加进群聊的选项。您可以通过简单的配置，自动创建满足业务需求的各类群聊。
![创建群聊节点](https://cdn.letsmagic.cn/static/img/Create-group-chat.png)


## 为什么需要创建群聊节点？
在智能工作流中，自动创建群聊可以解决许多实际问题：
1. **自动化协作流程**：当新项目启动、新客户加入或新任务创建时，自动组建相关工作群，保证信息传递及时有效。
2. **规范化沟通渠道**：按照预设模板创建标准化的群聊，确保组织内部沟通渠道的一致性和规范性。
3. **提升响应速度**：在特定事件触发时自动创建群聊并添加相关人员，减少人工创建群聊的时间，提高工作效率。
4. **智能化群成员管理**：根据业务规则自动添加合适的成员，避免漏加人员或添加错误人员的情况。
## 适用场景
### 场景一：新项目启动自动建群
当有新项目立项时，自动创建项目群，并将项目经理设为群主，添加项目团队成员和相关部门负责人到群中，同时让项目助手机器人发送项目启动通知。
### 场景二：客户服务流程
当新客户注册或提交特定服务请求时，自动创建服务群，添加客户、客服人员和相关专家，使客户问题能够在专属群聊中得到高效解决。
### 场景三：培训课程组织
培训系统可以为每个新课程自动创建培训群，添加讲师、学员和课程助教，并由助手机器人发送课程介绍和学习资料。
## 节点参数说明
### 输入参数
|参数名称|说明|是否必填|示例值|
|---|---|---|---|
|群名称|设置创建的群聊名称|是|"项目A开发小组"|
|群主|设置群聊的管理者，必须指定一位用户作为群主|是|用户变量或直接选择|
|群成员|需要添加到群聊中的其他成员列表|否|用户数组或直接选择|
|群类型|选择群聊类型，不同类型群聊可能有不同权限设置|是|内部群、项目群等|
|将当前用户添加进群聊|是否将触发工作流的用户添加到群聊中|否（默认开启）|勾选或取消勾选|
|将当前助理添加进群聊|是否将当前工作流的AI助理添加到群聊中|否（默认开启）|勾选或取消勾选|

### 群类型说明
创建群聊节点支持以下群类型：
|类型ID|类型名称|说明|
|---|---|---|
|1|内部群|组织内部的普通群聊|
|2|内部培训群|用于内部培训的专用群聊|
|3|内部会议群|用于内部会议讨论的群聊|
|4|内部项目群|用于项目协作的群聊|
|5|内部工单群|用于工单处理的群聊|
|6|外部群|可包含外部成员的群聊|

### 输出结果
创建群聊节点没有标准的输出参数，它的主要作用是执行创建的群聊动作。
## 使用说明
### 基本配置步骤
1. **添加节点**：在工作流编辑器中，从左侧节点面板选择"创建群聊"节点，拖拽到工作流画布中适当位置。
2. **设置群名称**：
    1. 点击"群名称"输入框
    2. 输入一个有意义的群聊名称，或者选择一个包含群名的变量
3. **选择群主**：
    1. 点击"群主"选择框
    2. 从用户列表中选择一位用户作为群主，或者使用变量引用
4. **添加群成员**（可选）：
    1. 点击"群成员"选择框
    2. 选择需要添加的群成员，可以是多个用户或用户数组变量
5. **选择群类型**：
    1. 从下拉菜单中选择适合您需求的群类型
6. **设置自动添加选项**：
    1. 根据需要，选择是否自动将当前用户和助理添加进群聊
### 进阶技巧
1. **动态设置群名称**：
    1. 可以使用变量组合生成群名称，如：`"项目项目名称讨论群"`
    2. 这样可以根据实际业务数据自动生成有意义的群名称
2. **智能群成员添加**：
    1. 结合"人员检索"节点，可以根据部门、职位或标签自动查找并添加相关人员
    2. 例如：`部门.技术部.成员`将添加技术部全体成员
3. **条件性创建群聊**：
    1. 搭配"条件分支"节点，可以根据不同条件创建不同类型的群聊
    2. 比如根据项目规模大小，创建不同类型的项目群
4. **群聊创建后的自动操作**：
    1. 可以在创建群聊后，使用"消息回复"节点自动在群内发送欢迎消息
    2. 也可以使用"大模型调用"节点生成个性化的群公告
## 注意事项
### 群主设置
- 群主必须是系统中的有效用户，否则群聊创建将失败
- 如使用变量设置群主，请确保变量值为有效的用户对象，包含用户ID信息
- 推荐使用"人员检索"节点的结果作为群主和群成员输入
### 群成员限制
- 添加过多成员可能会影响群聊创建性能，建议控制在合理范围内
- 如果某些用户不存在或无法添加，节点会跳过这些无效用户，不会导致整个节点失败
### 助理开场白
- 只有当"将当前助理添加进群聊"选项开启时，助理开场白设置才会生效
- 助理开场白支持变量引用，可以根据业务上下文动态生成个性化开场白
### 群聊创建条件
- 创建群聊功能仅在IM聊天环境中有效
- 在非IM环境（如API调用、定时触发等）中，节点会模拟创建过程但不会实际创建群聊
## 常见问题
### 创建群聊失败怎么办？
**问题**：
配置了创建群聊节点，但执行时报错或未能成功创建群聊。

**解决方案**：
1. 检查群主是否为有效用户，群主必须是系统中已存在的用户
2. 确认群名称不为空且格式正确
3. 验证选择的群类型是否有效
4. 检查执行环境是否支持创建群聊（需在IM环境中）
### 如何获取创建的群聊ID？

**问题**：
创建群聊后，如何在后续节点中引用这个群聊？

**解决方案**：
创建群聊节点会输出包含群ID的结果，可以在后续节点中通过变量引用获取：
- 使用 `上一节点.result.group_id` 获取群聊ID
- 使用 `上一节点.result.name` 获取群聊名称
### 为什么有些用户无法被添加到群聊？

**问题**：
配置了多个群成员，但有些成员没有被成功添加到群聊中。

**解决方案**：
1. 确认这些用户在系统中存在且状态正常
2. 检查是否因为权限问题导致无法添加某些用户
3. 验证用户数据格式是否正确，必须包含用户ID信息
## 常见搭配节点
|**节点类型**|**搭配原因**|
|---|---|
|人员检索节点|检索符合条件的用户，将这些用户作为群成员创建群聊|
|条件分支节点|根据不同条件创建不同类型或不同成员组成的群聊|
|大模型调用节点|使用大模型生成个性化的群名称或开场白|