import calendarData from "../../../constants/components/calendar.js";

export function generateDate(date) {
    return new Date(date.year, date.month - 1, date.day || 0);
}

export function generateCalendarData(inputYear, inputMonth) {
    const resultMonth = [];
    const lastMonth = 32 -
        generateDate({
            year: inputYear,
            month: inputMonth,
            day: 32,
        }).getDate();
    const firstWeekday = generateDate({
        year: inputYear,
        month: inputMonth,
    }).getDay() + 1;

    let iterator = 1;
    let cell = 1;
    let week = [];
    while (cell <= calendarData.MAX_COUNT_WEEKDAYS * calendarData.MAX_COUNT_WEEKS_IN_CALENDAR - 1) {
        if (cell >= firstWeekday && lastMonth >= iterator) {
            week.push(iterator);

            iterator += 1;
        } else {
            week.push(false);
        }

        if (week.length >= calendarData.MAX_COUNT_WEEKDAYS) {
            resultMonth.push(week);
            week = [];
        }

        cell += 1;
    }

    return resultMonth;
}