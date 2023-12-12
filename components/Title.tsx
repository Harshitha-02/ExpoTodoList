import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title: React.FC = () => {
  return (
    <Text style={styles.title}>To-Do List</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 16,
    backgroundColor: '#ff3385',
    color: '#fff',
    padding: 8,
    borderRadius: 5,
  },
});

export default Title;
