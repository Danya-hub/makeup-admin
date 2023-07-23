import { useContext } from "react";
import { Text } from "react-native";

import SideModal from "../../Common/SideModal/SideModal.jsx";
import CommonContext from "../../../context/common.js";
// import colors from "../../../constants/common/colors.js";

function MenuModal() {
    const {
        visibleMenuModal,
        setVisibleMenuModal,
    } = useContext(CommonContext);

    function closeHandler() {
        setVisibleMenuModal(false);
    }

    return (
        <SideModal
            visible={visibleMenuModal}
            onClose={closeHandler}
        >
            <Text>124</Text>
        </SideModal>
    );
}

export default MenuModal;

// const styles = StyleSheet.create({
//     container: {
//         alignItems: "center",
//         backgroundColor: `rgb(${colors.black})`,
//         flex: 1,
//         justifyContent: "center",
//     }
// });