import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import types from "prop-types";

import colors from "../../../constants/common/colors";

function TextWithImageButton({
    style,
    text,
    iconName,
    iconSize,
    iconColor,
    onPress,
}) {
    const { t } = useTranslation();

    return (
        <Pressable
            onPress={onPress}
            style={[style, styles.button]}
        >
            <Text
                style={styles.text}
            >{t(text)}</Text>
            <Ionicons
                name={iconName}
                size={iconSize}
                color={iconColor}
            />
        </Pressable>
    );
}

TextWithImageButton.defaultProps = {
    style: {},
    onPress: null,
};

TextWithImageButton.propTypes = {
    text: types.string.isRequired,
    iconName: types.string.isRequired,
    iconSize: types.number.isRequired,
    iconColor: types.string.isRequired,
    style: types.instanceOf(Object),
    onPress: types.func,
};

export default TextWithImageButton;

const styles = StyleSheet.create({
    button: {
        borderColor: `rgb(${colors.black})`,
        borderWidth: 2,
        flexDirection: "row",
        fontFamily: "Montserrat-SemiBold",
        paddingHorizontal: 14,
        paddingVertical: 6,
    },
    text: {
        marginRight: 6,
        textTransform: "uppercase",
    },
});