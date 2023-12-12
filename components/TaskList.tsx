import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: { text: string; completed: boolean }[];
  onToggleCompletion: (index: number) => void;
  onRemoveTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleCompletion, onRemoveTask }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          text={task.text}
          completed={task.completed}
          onToggleCompletion={() => onToggleCompletion(index)}
          onRemoveTask={() => onRemoveTask(index)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 200,
  },
});

export default TaskList;
