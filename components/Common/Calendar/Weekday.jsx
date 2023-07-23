import { StyleSheet, View, Text } from "react-native";
import { useTranslation } from "react-i18next";

import colors from "../../../constants/common/colors.js";
import sizes from "../../../constants/common/size.js";

function Weekday() {
	const { t } = useTranslation();

	return (
		<View
			style={styles.containter}
		>
			{t("weekdays", {
				returnObjects: true,
			}).map((weekday) => (
				<View
					key={weekday}
					style={styles.cell}
				>
					<Text
						style={styles.text}
					>{weekday}</Text>
				</View>
			))}
		</View>
	);
}

export default Weekday;

const styles = StyleSheet.create({
	cell: {
		alignItems: "center",
		backgroundColor: `rgb(${colors.lightGray})`,
		height: sizes.medium * 2,
		justifyContent: "center",
		width: sizes.medium * 2,
	},
	containter: {
		flexDirection: "row",
	},
	text: {
		fontFamily: "Montserrat-Medium",
		fontSize: sizes.small,
		fontWeight: "700",
		textTransform: "uppercase",
	},
});