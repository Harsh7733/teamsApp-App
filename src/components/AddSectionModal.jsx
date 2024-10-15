import React, { useState } from 'react';
import { View, Modal, Button, TextInput, ScrollView, Text, Alert } from 'react-native';
import { stylesforAddSectionModal } from './../../styles/styles';
import { saveTask } from '../../Services/TaskService';

const AddSectionModal = ({ visible, onClose, onSave, userId }) => {
    const [sectionID, setSectionID] = useState(''); // Use sectionID instead of sectionName
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState(''); // New field for description
    const [tags, setTags] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [assignedToID, setAssignedToID] = useState(''); // taskAssignedToID
    const [status, setStatus] = useState('Not Started');
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
            <View style={stylesforAddSectionModal.overlay}>
                <View style={stylesforAddSectionModal.modalContainer}>
                    <ScrollView contentContainerStyle={stylesforAddSectionModal.scrollContainer}>
                        <Text style={stylesforAddSectionModal.header}>Section ID:</Text>
                        <TextInput
                            placeholder="Section ID"
                            placeholderTextColor="gray"
                            value={sectionID}
                            onChangeText={setSectionID}
                            style={stylesforAddSectionModal.input}
                        />

                        <View style={stylesforAddSectionModal.buttonContainer}>
                            <View style={stylesforAddSectionModal.button}>
                                <Button title="Save" onPress={handleSave} />
                            </View>
                            <View style={stylesforAddSectionModal.button}>
                                <Button title="Close" onPress={onClose} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default AddSectionModal;