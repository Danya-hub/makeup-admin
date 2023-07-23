import { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import types from "prop-types";

import CommonContext from "../../../context/common.js";
import colors from "../../../constants/common/colors.js";
import sizes from "../../../constants/common/size.js";

function Navigation({
	dateUnits,
	combinedDate,
	setDateUnits,
	onChange,
}) {
	const {
		lang,
	} = useContext(CommonContext);

	const formatedDate = Intl.DateTimeFormat(lang, {
		month: "long",
		year: "numeric",
		day: "numeric",
	}).format(combinedDate);

	function prevMonthHandler() {
		const prevMonth = dateUnits.month - 1;

		onChange(
			new Date(dateUnits.year, prevMonth, dateUnits.day),
			() => setDateUnits((units) => {
				units.month = prevMonth;

				return { ...units };
			}),
		);
	}

	function nextMonthHandler() {
		const nextMonth = dateUnits.month + 1;

		onChange(
			new Date(dateUnits.year, nextMonth, dateUnits.day),
			() => setDateUnits((units) => {
				units.month = nextMonth;

				return { ...units };
			}),
		);
	}

	return (
		<View
			style={styles.container}
		>
			<View
				style={styles.dateContainer}
			>
				<Text
					style={styles.date}
				>{formatedDate}</Text>
			</View>
			<View
				style={styles.buttonsContainer}
			>
				<Pressable
					onPress={prevMonthHandler}
					style={styles.button}
				>
					<Ionicons
						name="chevron-up"
						color={`rgb(${colors.black})`}
						size={sizes.medium}
					/>
				</Pressable>
				<Pressable
					onPress={nextMonthHandler}
					style={styles.button}
				>
					<Ionicons
						name="chevron-down"
						color={`rgb(${colors.black})`}
						size={sizes.medium}
					/>
				</Pressable>
			</View>
		</View>
	);
}

Navigation.propTypes = {
	onChange: types.func.isRequired,
	dateUnits: types.instanceOf(Object).isRequired,
	combinedDate: types.instanceOf(Date).isRequired,
	setDateUnits: types.func.isRequired,
};

export default Navigation;

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		height: sizes.medium * 2,
		justifyContent: "center",
		width: sizes.medium * 2,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	date: {
		fontFamily: "Montserrat-SemiBold",
		fontSize: sizes.xMedium,
		fontWeight: "800",
		letterSpacing: 0.8,
		textTransform: "uppercase",
	},
	dateContainer: {
		justifyContent: "center",
	},
});
