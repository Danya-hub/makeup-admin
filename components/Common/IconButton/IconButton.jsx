import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import types from "prop-types";

function IconButton({
    name,
    color,
    size,
    onPress,
    style,
}) {
    return (
        <Pressable
            onPress={onPress}
            style={style}
        >
            <Ionicons
                name={name}
                color={color}
                size={size}
            />
        </Pressable>
    );
}

IconButton.defaultProps = {
    style: {},
};

IconButton.propTypes = {
    name: types.string.isRequired,
    color: types.string.isRequired,
    size: types.number.isRequired,
    onPress: types.func.isRequired,
    style: types.instanceOf(Object),
};

export default IconButton;