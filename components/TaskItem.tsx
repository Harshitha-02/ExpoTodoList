import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface TaskItemProps {
  text: string;
  completed: boolean;
  onToggleCompletion: () => void;
  onRemoveTask: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ text, completed, onToggleCompletion, onRemoveTask }) => {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity style={styles.checkbox} onPress={onToggleCompletion}>
        {completed && <Text style={styles.tick}>&#10003;</Text>}
      </TouchableOpacity>
      <Text style={[styles.taskText, { textDecorationLine: completed ? 'line-through' : 'none' }]}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemoveTask}>
        <Text style={styles.buttonText}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: '#000',
    borderWidth: 1,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    color: '#000',
    fontSize: 14,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff3385',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TaskItem;
