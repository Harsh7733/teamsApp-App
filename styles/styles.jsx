import { StyleSheet } from "react-native";

export const stylesforApp = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingTop: 70,
        paddingHorizontal: 20,
        alignItems: 'left',
        width: '100%',
    },
    addButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        marginBottom: 20,
    },
    addButtonText: {
        fontFamily: 'Poppins-Bold',
        color: '#fff',
        fontSize: 16,
    },
});

export const stylesforHeader = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#3d3d3d',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon: {
        marginLeft: 'auto',
    },
});

export const stylesforHome = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
    },
});

export const stylesforFooter = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#3d3d3d',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    footerButton: {
        alignItems: 'center',
    },
});

export const stylesforTaskList = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    task: {
        fontSize: 16,
    },
});

export const stylesforTaskModal = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '90%',
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 20,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 20,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    input: {
        borderWidth: 1,
        color: 'black',
        padding: 10,
        marginVertical: 10,
        borderColor: 'gray',
        borderRadius: 5,
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
    },
    picker: {
        height: 50,
        width: '100%',
        marginVertical: 10,
        color: 'black',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    button: {
        marginHorizontal: 5,
    },
});