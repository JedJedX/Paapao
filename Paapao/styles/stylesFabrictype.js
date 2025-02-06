import { StyleSheet } from "react-native";

const styleFabrictype = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#B9E9E8"
    },
    contentcard: {
        width: 380,
        borderRadius: 20,
        backgroundColor: "#41C9E2",
        margin: 10,
        alignItems: "center",
    },
    cardfabric:{
        width: 350,

    },
    cardimg:{
        justifyContent: 'center',
        alignItems: 'center',

    },
    textcard: {
        width: '95%',
        borderRadius: 20,
        backgroundColor: "#fff",
        margin: 20,
    },
    name:{
        width: 350,
        padding:20,
        borderRadius: 20,
        backgroundColor: "#fff",
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameprice:{
        fontSize: 24,
        fontWeight: 'bold',

    },
    title: {
        fontSize: 18,
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
    },
    strength:{
        width: 350,
        padding:20,
        borderRadius: 20,
        backgroundColor: "#fff",
        marginBottom:10,

    },
    weakness:{
        width: 350,
        padding:20,
        borderRadius: 20,
        backgroundColor: "#fff",
        marginBottom:10,
        
    },
});
export default styleFabrictype;