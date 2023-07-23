import { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import types from "prop-types";

import Navigation from "./Navigation.jsx";
import Content from "./Content.jsx";
import Weekday from "./Weekday.jsx";

import sizes from "../../constants/common/size.js";
import calendarData from "../../constants/components/calendar.js";

const newDate = new Date();

function defaultDateUnits() {
	return {
		year: newDate.getFullYear(),
		month: newDate.getMonth(),
		day: newDate.getDate(),
	};
}

function Calendar({
	onChange,
	style,
}) {
	const [dateUnits, setDateUnits] = useState(defaultDateUnits);
	const immutableDate = useRef(defaultDateUnits());

	const combinedDate = new Date(
		dateUnits.year,
		dateUnits.month,
		dateUnits.day
	);

	return (
		<View
			style={[styles.container, style]}
		>
			<View>
				<Navigation
					dateUnits={dateUnits}
					setDateUnits={setDateUnits}
					combinedDate={combinedDate}
					onChange={onChange}
				/>
			</View>
			<View>
				<Weekday />
				<Content
					dateUnits={dateUnits}
					setDateUnits={setDateUnits}
					immutableDate={immutableDate}
					onChange={onChange}
				/>
			</View>
		</View>
	);
}

Calendar.defaultProps = {
	componentStyles: {},
};

Calendar.propTypes = {
	onChange: types.func.isRequired,
	style: types.instanceOf(Object),
};

export default Calendar;

const styles = StyleSheet.create({
	container: {
		width: 2 * sizes.medium * calendarData.MAX_COUNT_WEEKDAYS,
	}
});
