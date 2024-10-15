import React from 'react';
import { View, Text } from 'react-native';
import { stylesforHome } from '../../styles/styles'; 

const Home = () => {
    return (
        <View style={stylesforHome.container}>
            <Text style={stylesforHome.title}>Welcome to the Copious-Teams</Text>
            <Text style={stylesforHome.subtitle}>Manage your tasks efficiently!</Text>
        </View>
    );
};

export default Home;
