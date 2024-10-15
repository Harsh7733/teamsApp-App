import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { stylesforHeader } from '../../styles/styles';

const Header = () => {
  return (
    <View style={stylesforHeader.container}>
      <Text style={stylesforHeader.title}>Copious-Teams</Text>
      <Icon name="bell" size={20} color="#ffffff" style={stylesforHeader.icon} />
    </View>
  );
};

export default Header;
