import { StyleProp, TextStyle, ViewStyle } from 'react-native';

declare namespace ActionSheet {
	interface StyleProps {
		// 整个视图的背景色
		backgroundColor: string;
		// 内容区的背景色
		contentBackgroundColor: string;
		// 分隔线的颜色
		separatorColor: string;
		// 按钮文本的字号
		fontSize: number;
		// 按钮文本的颜色
		color: string;
		// 顶部标题的样式
		titleStyle: StyleProp<TextStyle>;
		// 顶部消息的样式
		messageStyle: StyleProp<TextStyle>;
		// 辅助按钮的样式
		destructiveButtonStyle: StyleProp<ViewStyle>;
		// 取消按钮的样式
		cancelButtonStyle: StyleProp<ViewStyle>;
		// 按钮点击操作的Underlay颜色
		touchableUnderlayColor: string;
	}
	var Container: {
		defaultProps: Partial<StyleProps>;
	};
	var useActionSheetIOS: boolean;
	function showActionSheetWithOptions(config: { options: string[]; title?: string; message?: string; cancelButtonIndex?: number; }, callback: (index: number) => void): void;
}

export = ActionSheet;
