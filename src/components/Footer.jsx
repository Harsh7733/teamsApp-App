import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { stylesforFooter } from './../../styles/styles';

const Footer = ({ onMyTasksClick, onHomeClick }) => {
    return (
        <View style={stylesforFooter.footer}>
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
    <View style={stylesforFooter.footerButton}>
        <Ionicons name={icon} size={24} />
        <Text>{label}</Text>
    </View>
);

export default Footer;
