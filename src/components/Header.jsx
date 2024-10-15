import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Copious-Teams</Text>
      <Icon name="bell" size={20} color="#ffffff" />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Header;
