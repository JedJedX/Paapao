import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentcard: {
        width: 200,
        height: 200,
        backgroundColor: "#ffb6c1",
        marginBottom: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    imgcard: {
        width: 80,
        height: 80,
        backgroundColor: "#add8e6",
        justifyContent: "center",
        alignItems: "center",
    },
    textcard: {
        width: 80,
        height: 80,
        backgroundColor: "#add8e6",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
export default styles;