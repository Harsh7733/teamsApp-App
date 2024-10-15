import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Footer = ({ onMyTasksClick, onHomeClick }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={onHomeClick}>
                <FooterButton icon="home-outline" label="Home" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onMyTasksClick}>
                <FooterButton icon="checkmark-done-outline" label="My Tasks" />
            </TouchableOpacity>
            <FooterButton icon="search-outline" label="Search" />
            <FooterButton icon="person-outline" label="Account" />
        </View>
    );
};

const FooterButton = ({ icon, label }) => (
    <View style={styles.footerButton}>
        <Ionicons name={icon} size={24} />
        <Text>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
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

export default Footer;