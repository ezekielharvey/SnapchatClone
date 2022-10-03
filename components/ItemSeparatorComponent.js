import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ItemSeparatorComponent = () => {
  return <View style={styles.separator} className="bg-slate-50 my-2 mt-4" />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1.5,
  },
});

export default ItemSeparatorComponent;
