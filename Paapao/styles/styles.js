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
        height: 250,
        borderRadius: 20,
        backgroundColor: "#41C9E2",
        margin: 20,
        alignItems: "center",
    },
    textcard: {
        width: '95%',
        height: '50%',
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    fabricImage: {
        width: 100,
        height: 100,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        }
});
export default styles;