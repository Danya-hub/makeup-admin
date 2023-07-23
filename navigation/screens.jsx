import { View, StyleSheet } from "react-native";

import Clients from "../screens/Clients.jsx";
import Reports from "../screens/Reports.jsx";
import Schedule from "../screens/Schedule.jsx";
import Services from "../screens/Services.jsx";
import IconButton from "../components/Common/IconButton/IconButton.jsx";

import colors from "../constants/common/colors.js";
import sizes from "../constants/common/size.js";

const screens = [
    {
        component: Schedule,
        name: "schedule",
        icon: "calendar-sharp",
        headerRight: () => (
            <View
                style={styles.headerRightContainer}
            >
                <IconButton
                    name="md-notifications-outline"
                    color={`rgb(${colors.brown})`}
                    size={sizes.large}
                />
            </View>
        ),
    },
    {
        component: Reports,
        name: "reports",
        icon: "md-clipboard-outline",
        headerRight: () => (
            <View
                style={styles.headerRightContainer}
            >
                <IconButton
                    name="options-outline"
                    color={`rgb(${colors.brown})`}
                    size={sizes.large}
                    style={styles.sliders}
                />
                <IconButton
                    name="md-notifications-outline"
                    color={`rgb(${colors.brown})`}
                    size={sizes.large}
                />
            </View>
        ),
    },
    {
        component: Clients,
        name: "clients",
        icon: "person-outline",
        headerRight: () => (
            <View
                style={styles.headerRightContainer}
            >
                <IconButton
                    name="options-outline"
                    color={`rgb(${colors.brown})`}
                    size={sizes.large}
                    style={styles.sliders}
                />
                <IconButton
                    name="md-notifications-outline"
                    color={`rgb(${colors.brown})`}
                    size={sizes.large}
                />
            </View>
        ),
    },
    {
        component: Services,
        name: "services",
        icon: "md-star-outline",
        headerRight: () => (
            <View
                style={styles.headerRightContainer}
            >
                <IconButton
                    name="options-outline"
                    color={`rgb(${colors.brown})`}
                    size={sizes.large}
                    style={styles.sliders}
                />
                <IconButton
                    name="md-notifications-outline"
                    color={`rgb(${colors.brown})`}
                    size={sizes.large}
                />
            </View>
        ),
    },
];

export default screens;

const styles = StyleSheet.create({
    headerRightContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    sliders: {
        marginRight: 20,
    }
});