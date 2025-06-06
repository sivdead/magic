export const enum RoutePath {
	/*/api 和/v1 是后端服务使用的路由，为了避免做反向代理时，跟后端服务冲突，不可以使用这两个路由*/
	Home = "/home",
	Chat = "/chat",
	Login = "/login",
	Invite = "/login/invite",
	NotFound = "*",
	/**
	 * @description 云盘
	 */
	/** 常用云盘 */
	DriveRecent = "/drive/recent",
	/** 个人云盘 */
	DriveMe = "/drive/me",
	/** 企业云盘 */
	DriveShared = "/drive/shared",
	/** 我创建的 */
	DriveCreated = "/drive/mine",
	/** 回收站 */
	DriveTrash = "/drive/trash",
	/** 文件夹 */
	DriveFolder = "/drive/folder/:folderId/:spaceType",
	/** 文档 */
	BiTable = "/base",
	/** 知识库 */
	Knowledge = "/knowledge",
	/** 知识库 - 首页展示 */
	KnowledgeWiki = "/wiki",
	/** 审批 */
	Approval = "/approval",
	/** 任务 */
	Tasks = "/tasks",
	/** 收藏 */
	Favorites = "/favorites",
	/** 设置 */
	Settings = "/settings",
	/** 通讯录 */
	Contacts = "/contacts",
	ContactsOrganization = "/contacts/organization",
	ContactsAiAssistant = "/contacts/ai-assistant",
	ContactsMyFriends = "/contacts/my-friends",
	ContactsMyGroups = "/contacts/my-groups",
	Application = "/app",
	Workspace = "/workspace",
	AssistantList = "/flow/assistant",
	Flow = "/flow",
	Flows = "/flow/:type/list",
	VectorKnowledge = "/vector-knowledge",
	VectorKnowledgeCreate = "/vector-knowledge/create",
	VectorKnowledgeDetail = "/vector-knowledge/detail",
	AgentList = "/flow/agent/list",
	Explore = "/explore",
	FlowKnowledgeDetail = "/flow/knowledge/detail/:id",
	FlowDetail = "/flow/:type/detail/:id",
	Calendar = "/calendar",
	/** 超级麦吉 */
	SuperMagic = "/super-magic/workspace",
	SuperMagicWorkspace = "/super-magic/workspace",
	SuperMagicShare = "/share/:shareId",
}
