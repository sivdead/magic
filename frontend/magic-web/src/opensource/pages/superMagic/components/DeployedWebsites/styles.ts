import { createStyles } from "antd-style"

export const useStyles = createStyles(({ token }) => ({
	item: {
		display: "flex",
		flexDirection: "column",
		border: `1px solid ${token.magicColorUsages.border}`,
		borderRadius: 8,
	},
	itemHeader: {
		flex: "auto",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		padding: 20,
		paddingBottom: 0,
	},
	itemName: {
		fontSize: 14,
		fontWeight: 600,
		lineHeight: "20px",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
	itemDescription: {
		flex: "auto",
		fontSize: 12,
		fontWeight: 400,
		marginTop: 10,
		lineHeight: "16px",
		overflow: "hidden",
		textOverflow: "ellipsis",
		display: "-webkit-box",
		"-webkit-line-clamp": "3",
		"-webkit-box-orient": "vertical",
		height: 48,
	},
	itemImage: {
		flex: "none",
		marginTop: 10,
		height: 72,
		borderRadius: 4.22,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.30)",
	},
	itemFooter: {
		height: 36,
		flex: "none",
		borderTop: `1px solid ${token.magicColorUsages.border}`,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},
	button: {
		padding: "0px !important",
		fontSize: 12,
		fontWeight: 400,
	},
	dataContainer: {
		height: "100%",
		overflow: "hidden auto",
		paddingRight: 20,
	},
	pageContent: {
		paddingRight: 0,
	},
}))
