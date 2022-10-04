import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ItemSeparatorComponent = ({ color }) => {
  return (
    <View style={[styles.separator, { backgroundColor: color }]} className="mt-2 mt-4" />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1.5,
  },
});

export default ItemSeparatorComponent;
