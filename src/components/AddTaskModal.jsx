import React, { useState } from 'react';
import { View, Modal, Button, TextInput, ScrollView, Text, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { stylesforAddTaskModal } from './../../styles/styles';
import { saveTask } from '../../Services/TaskService';

const AddTaskModal = ({ visible, onClose, onSave, userId }) => {
    const [sectionID, setSectionID] = useState(''); // Use sectionID instead of sectionName
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState(''); // New field for description
    const [tags, setTags] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [assignedToID, setAssignedToID] = useState(''); // taskAssignedToID
    const [status, setStatus] = useState('Not Started');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`; // Change format to YYYY-MM-DD for backend compatibility
    };

    const handleSave = async () => {
        if (!taskName || !sectionID) {
            Alert.alert('Error', 'Task name and section ID are required!');
            return;
        }

        const task = {
            taskName,
            description,
            dueDate: formatDate(dueDate), // Send formatted date
            subTask: '', // Assuming subTask is empty for now
            taskAssignedToID: assignedToID,
            taskCreatedByID: userId, // Use userId prop for creator ID
            status,
            sectionID,
            platformType: 'mobile', // Assuming this is a mobile app
            tagIDs: tags.split(',').map(tag => tag.trim()), // Convert tags to array of IDs
        };

        try {
            await saveTask(task); // Call saveTask API
            Alert.alert('Success', 'Task saved successfully!');
            onSave(task); // Optionally call onSave to update state in parent
            resetFields();
        } catch (error) {
            console.error('Error saving task:', error);
            Alert.alert('Error', error.message); // Display error message
        }
    };

    const resetFields = () => {
        setSectionID('');
        setTaskName('');
        setDescription('');
        setTags('');
        setDueDate(new Date());
        setAssignedToID('');
        setStatus('Not Started');
    };

    const handleDateChange = (event, selectedDate) => {
        if (event.type === 'set') {
            setDueDate(selectedDate);
        }
        setShowDatePicker(false);
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={stylesforAddTaskModal.overlay}>
                <View style={stylesforAddTaskModal.modalContainer}>
                    <ScrollView contentContainerStyle={stylesforAddTaskModal.scrollContainer}>
                        <Text style={stylesforAddTaskModal.header}>Section ID:</Text>
                        <TextInput
                            placeholder="Section ID"
                            placeholderTextColor="gray"
                            value={sectionID}
                            onChangeText={setSectionID}
                            style={stylesforAddTaskModal.input}
                        />

                        <Text style={stylesforAddTaskModal.header}>Task Name:</Text>
                        <TextInput
                            placeholder="Task Name"
                            placeholderTextColor="gray"
                            value={taskName}
                            onChangeText={setTaskName}
                            style={stylesforAddTaskModal.input}
                        />

                        <Text style={stylesforAddTaskModal.header}>Description:</Text>
                        <TextInput
                            placeholder="Description"
                            placeholderTextColor="gray"
                            value={description}
                            onChangeText={setDescription}
                            style={stylesforAddTaskModal.input}
                        />

                        <Text style={stylesforAddTaskModal.header}>Tags:</Text>
                        <TextInput
                            placeholder="Tags (comma separated IDs)"
                            placeholderTextColor="gray"
                            value={tags}
                            onChangeText={setTags}
                            style={stylesforAddTaskModal.input}
                        />

                        <Text style={stylesforAddTaskModal.header}>Due Date:</Text>
                        <TextInput
                            placeholder="Due Date (YYYY-MM-DD)"
                            placeholderTextColor="gray"
                            value={formatDate(dueDate)}
                            onFocus={() => setShowDatePicker(true)}
                            style={stylesforAddTaskModal.input}
                        />

                        {showDatePicker && (
                            <DateTimePicker
                                value={dueDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}

                        <Text style={stylesforAddTaskModal.header}>Assigned To (User ID):</Text>
                        <TextInput
                            placeholder="Assigned To (User ID)"
                            placeholderTextColor="gray"
                            value={assignedToID}
                            onChangeText={setAssignedToID}
                            style={stylesforAddTaskModal.input}
                        />

                        <Text style={stylesforAddTaskModal.header}>Status:</Text>
                        <Picker
                            selectedValue={status}
                            style={stylesforAddTaskModal.picker}
                            onValueChange={(itemValue) => setStatus(itemValue)}
                        >
                            <Picker.Item label="Not Started" value="Not Started" />
                            <Picker.Item label="In Progress" value="In Progress" />
                            <Picker.Item label="Completed" value="Completed" />
                            <Picker.Item label="On Hold" value="On Hold" />
                        </Picker>

                        <View style={stylesforAddTaskModal.buttonContainer}>
                            <View style={stylesforAddTaskModal.button}>
                                <Button title="Save" onPress={handleSave} />
                            </View>
                            <View style={stylesforAddTaskModal.button}>
                                <Button title="Close" onPress={onClose} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default AddTaskModal;