import { TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import types from "prop-types";

import TextWithImageButton from "../../Common/TextWithImageButton/TextWithImageButton.jsx";
import sizes from "../../../constants/common/size.js";
import colors from "../../../constants/common/colors.js";

function SideModal({
    visible,
    onClose,
    children,
}) {
    function preventCloseHandler(e) {
        e.stopPropagation();
    }

    return (
        <Modal
            transparent
            visible={visible}
        >
            <TouchableOpacity
                onPress={onClose}
                style={styles.overley}
            >
                <View
                    style={styles.container}
                >
                    <TextWithImageButton
                        style={styles.close}
                        text="close"
                        iconName="close"
                        iconSize={sizes.large}
                        iconColor={`rgb(${colors.black})`}
                        onPress={onClose}
                    />
                    <TouchableOpacity
                        style={styles.content}
                        onPress={preventCloseHandler}
                        activeOpacity={1}
                    >
                        {children}
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

SideModal.propTypes = {
    visible: types.bool.isRequired,
    onClose: types.func.isRequired,
    children: types.oneOfType([
        types.node,
        types.arrayOf(types.node),
    ]).isRequired,
};

export default SideModal;

const styles = StyleSheet.create({
    close: {
        alignSelf: "flex-end",
        margin: 20,
    },
    container: {
        backgroundColor: `rgb(${colors.white})`,
        elevation: 5,
        flex: 1,
        shadowColor: `rgb(${colors.black})`,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: "80%",
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    overley: {
        backgroundColor: `rgba(${colors.black}, 0.5)`,
        flex: 1,
    },
});