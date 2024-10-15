import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Copious-Teams</Text>
            <Text style={styles.subtitle}>Manage your tasks efficiently!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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


export default Home;