import { StyleSheet } from "react-native";

export const stylesforHomeScreen = StyleSheet.create({
    text: {
        color: 'black',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        color: 'black',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#548eb8',
        alignItems: 'center',
        borderRadius: 8,
        height:40,
    },
    ttext: {
        fontSize: 22,
        marginTop:5,
        textAlign:'center',
        color: 'white',
    }
});

export const stylesforDetailsScreen = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 18,
        marginBottom: 12,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    button: {
        backgroundColor: '#548eb8',
        alignItems: 'center',
        borderRadius: 8,
        height:40,
    },
    ttext: {
        fontSize: 22,
        marginTop:5,
        textAlign:'center',
        color: 'white',
    }
});