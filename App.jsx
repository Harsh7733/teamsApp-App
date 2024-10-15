import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import TaskModal from './src/components/TaskModal';
import TaskList from './src/components/TaskList';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Home from './src/components/HomeComponent';
import { stylesforApp } from '../teamsApp/styles/styles'; 

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
    <View style={stylesforApp.container}>
      <Header />
      <View style={stylesforApp.content}>
        {activeScreen === 'home' ? (
          <Home />
        ) : (
          <>
            {showAddTaskButton && (
              <TouchableOpacity style={stylesforApp.addButton} onPress={() => setModalVisible(true)}>
                <Text style={stylesforApp.addButtonText}>Add Task</Text>
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

export default App;