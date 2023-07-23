import { View, Pressable, Text, StyleSheet } from "react-native";
import types from "prop-types";

import { generateCalendarData } from "./helpers/template.js";
import calendarData from "../../../constants/components/calendar.js";
import sizes from "../../../constants/common/size.js";
import colors from "../../../constants/common/colors.js";

function Content({
	dateUnits,
	setDateUnits,
	immutableDate,
	onChange
}) {
	const daysOfMonth = generateCalendarData(
		dateUnits.year,
		dateUnits.month + 1,
	);

	function pressHandler(selectedDay) {
		if (!selectedDay) {
			return;
		}

		onChange(
			new Date(dateUnits.year, dateUnits.month, selectedDay),
			() => setDateUnits((units) => {
				units.day = selectedDay;

				return { ...units };
			}),
		);
	}

	return (
		<View>
			{daysOfMonth.map((week, i) => (
				<View
					key={`${calendarData.MAX_COUNT_WEEKS_IN_CALENDAR - i}/column`}
					style={styles.week}
				>
					{week.map((row, j) => {
						const cellStyles = [
							dateUnits.day === row
							&& styles.hover,
							immutableDate.current.day === row
							&& immutableDate.current.month === dateUnits.month
							&& styles.current,
							styles.cell,
						];

						return (
							<Pressable
								key={`${i * calendarData.MAX_COUNT_WEEKDAYS + j}/row`}
								onPress={() => pressHandler(row)}
								style={cellStyles}
							>
								<Text
									style={styles.day}
								>{row}</Text>
							</Pressable>
						);
					})}
				</View>
			))}
		</View>
	);
}

Content.propTypes = {
	onChange: types.func.isRequired,
	dateUnits: types.instanceOf(Object).isRequired,
	setDateUnits: types.func.isRequired,
	immutableDate: types.instanceOf(Object).isRequired,
};

export default Content;

const styles = StyleSheet.create({
	cell: {
		alignItems: "center",
		borderRadius: sizes.large,
		height: sizes.medium * 2,
		justifyContent: "center",
		width: sizes.medium * 2,
	},
	current: {
		borderColor: `rgb(${colors.brown})`,
		borderWidth: 1,
	},
	day: {
		fontFamily: "Montserrat-Regular",
		fontSize: sizes.medium,
		letterSpacing: 0.8,
	},
	hover: {
		backgroundColor: `rgba(${colors.brown}, 0.4)`,
	},
	week: {
		flexDirection: "row"
	}
});
