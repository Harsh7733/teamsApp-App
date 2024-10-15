import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AddTaskModal from './src/components/AddTaskModal';
import AddSectionModal from './src/components/AddSectionModal';
import TaskList from './src/components/TaskList';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Home from './src/components/HomeComponent';
import { stylesforApp } from '../teamsApp/styles/styles';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [sections, setSections] = useState([]); // State for sections
  const [showAddTaskButton, setShowAddTaskButton] = useState(false);
  const [showAddSectionButton, setShowAddSectionButton] = useState(false); // State for section button
  const [activeScreen, setActiveScreen] = useState('home');
  const [modalType, setModalType] = useState(''); // New state to determine which modal to show

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setModalVisible(false);
  };

  const addSection = (section) => {
    setSections([...sections, section]);
    setModalVisible(false);
  };

  const handleMyTasksClick = () => {
    setShowAddTaskButton(true);
    setShowAddSectionButton(false);
    setActiveScreen('tasks');
  };

  const handleSectionClick = () => {
    setShowButton(true);
    setShowAddSectionButton(false);
    setActiveScreen('tasks');
  };

  const handleHomeClick = () => {
    setShowAddTaskButton(false);
    setShowAddSectionButton(false);
    setActiveScreen('home');
  };

  const handleAddTaskClick = () => {
    setModalType('task');
    setModalVisible(true);
  };

  const handleAddSectionClick = () => {
    setModalType('section');
    setModalVisible(true);
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
              <TouchableOpacity style={stylesforApp.addButton} onPress={handleAddTaskClick}>
                <Text style={stylesforApp.addButtonText}>Add Task</Text>
              </TouchableOpacity>
            )}
            {showAddSectionButton && (
              <TouchableOpacity style={stylesforApp.addButton} onPress={handleAddSectionClick}>
                <Text style={stylesforApp.addButtonText}>Add Section</Text>
              </TouchableOpacity>
            )}
            <TaskList tasks={tasks} />
            {modalVisible && (
              modalType === 'task' ? (
                <AddTaskModal visible={modalVisible} onClose={() => setModalVisible(false)} onSave={addTask} />
              ) : (
                <AddSectionModal visible={modalVisible} onClose={() => setModalVisible(false)} onSave={addSection} />
              )
            )}
          </>
        )}
      </View>
      <Footer
        onMyTasksClick={handleMyTasksClick  }
        onHomeClick={handleHomeClick}
      />
    </View>
  );
};

export default App;
