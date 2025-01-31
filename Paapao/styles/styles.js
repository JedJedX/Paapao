import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#B9E9E8"
    },
    contentcard: {
        width: 380,
        height: 210,
        borderRadius: 20,
        backgroundColor: "#41C9E2",
        margin: 20,
        alignItems: "center",
    },
    textcard: {
        width: 100,
        height: 100,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
export default styles;