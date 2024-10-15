import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TaskModal from './src/components/TaskModal';
import TaskList from './src/components/TaskList';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Home from './src/components/HomeComponent';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showAddTaskButton, setShowAddTaskButton] = useState(false);
  const [activeScreen, setActiveScreen] = useState('home');

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setModalVisible(false);
  };

  const handleMyTasksClick = () => {
    setShowAddTaskButton(true);
    setActiveScreen('tasks'); // Show tasks
  };

  const handleHomeClick = () => {
    console.log("Home button clicked");
    setShowAddTaskButton(false);
    setActiveScreen('home'); // Show home
  };


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {activeScreen === 'home' ? (
          <Home /> // Removed key prop
        ) : (
          <>
            {showAddTaskButton && (
              <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>Add Task</Text>
              </TouchableOpacity>
            )}
            <TaskList tasks={tasks} />
            <TaskModal visible={modalVisible} onClose={() => setModalVisible(false)} onSave={addTask} />
          </>
        )}
      </View>
      <Footer
        onMyTasksClick={handleMyTasksClick}
        onHomeClick={handleHomeClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 70,
    paddingHorizontal: 20,
    alignItems: 'left',
    width: '100%',
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: 16,
  },
});

export default App;