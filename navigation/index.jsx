import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import IconButton from "../components/Common/IconButton/IconButton.jsx";

import screens from "./screens.jsx";
import CommonContext from "../context/common.js";
import sizes from "../constants/common/size.js";
import colors from "../constants/common/colors.js";

const Tab = createBottomTabNavigator();

function Navigation() {
    const { t } = useTranslation();
    const {
        setVisibleMenuModal,
    } = useContext(CommonContext);

    function openMenuModalHandler() {
        setVisibleMenuModal(true);
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerLeft: () => (
                    <View
                        style={styles.headerLeftContainer}
                    >
                        <IconButton
                            name="menu"
                            color={`rgb(${colors.brown})`}
                            size={sizes.xLarge}
                            onPress={openMenuModalHandler}
                        />
                    </View>
                ),
                headerTitleAlign: "center",
                headerTitleStyle: {
                    textTransform: "uppercase",
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: sizes.medium,
                },
            }}
        >
            {screens.map((screen) => <Tab.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                anima
                options={{
                    tabBarStyle: {
                        paddingHorizontal: 25,
                        paddingTop: 10,
                        height: 60,
                    },
                    headerTitle: t(screen.name),
                    tabBarLabel: ({ focused }) => <Text
                        style={styles.tabLabel(focused)}
                    >{t(screen.name)}</Text>,
                    tabBarIcon: ({ focused }) => <Ionicons
                        name={screen.icon}
                        size={sizes.large}
                        color={`rgba(${colors.brown}, ${focused ? 1 : 0.4})`}
                    />,
                    headerRight: screen.headerRight,
                }}
            />)}
        </Tab.Navigator>
    );
}

export default Navigation;

const styles = StyleSheet.create({
    headerLeftContainer: {
        marginHorizontal: 20,
    },
    tabLabel: (focused) => ({
        fontFamily: "Montserrat-SemiBold",
        fontSize: sizes.small,
        color: `rgba(${colors.brown}, ${focused ? 1 : 0.4})`,
        marginBottom: 5,
    }),
});