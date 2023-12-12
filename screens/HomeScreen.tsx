// ... (imports)
import React from 'react';
import { StyleSheet, View, ImageBackground, Button} from 'react-native';
import Title from '../components/Title';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

interface Task {
    text: string;
    completed: boolean;
  }  

interface HomeScreenProps {
    navigation: any; // You might want to replace 'any' with the correct type
  }

const HomeScreen: React.FC = () => { //functional component 
    const [tasks, setTasks] = React.useState<Task[]>([]);
  
    const onAddTask = (text: string) => {
      // Add the new task to the tasks array
      setTasks([...tasks, { text, completed: false }]);
    };
  
    const onToggleCompletion = (index: number) => {
      // Toggle the completion status of the task at the specified index
      setTasks((prevTasks) =>
        prevTasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    const onRemoveTask = (index: number) => {
      // Remove the task at the specified index
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };
  
    return (
      
      <ImageBackground source={require('../assets/images.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Title />
            <TaskInput onAddTask={onAddTask} />
            <TaskList tasks={tasks} onToggleCompletion={onToggleCompletion} onRemoveTask={onRemoveTask} />
        
          </View>
        </View>
      </ImageBackground>
    );
  };
  
  // ... (styles)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      backgroundColor: '#fbaed2',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    backgroundImage: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
    },
  });

  export default HomeScreen;
  

