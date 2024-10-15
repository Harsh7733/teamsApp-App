import React, { useState } from 'react';
import { View, Modal, Button, TextInput, ScrollView, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { stylesforTaskModal } from './../../styles/styles';

const TaskModal = ({ visible, onClose, onSave }) => {
    const [sectionName, setSectionName] = useState('');
    const [taskName, setTaskName] = useState('');
    const [tags, setTags] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [assignedTo, setAssignedTo] = useState('');
    const [status, setStatus] = useState('Not Started');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const handleSave = () => {
        if (!taskName) {
            alert('Task name is required!');
            return;
        }
        const task = {
            sectionName,
            taskName,
            tags: tags.split(',').map(tag => tag.trim()),
            dueDate: formatDate(dueDate),
            assignedTo,
            status,
        };
        onSave(task);
        resetFields();
    };

    const resetFields = () => {
        setSectionName('');
        setTaskName('');
        setTags('');
        setDueDate(new Date());
        setAssignedTo('');
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
            <View style={stylesforTaskModal.overlay}>
                <View style={stylesforTaskModal.modalContainer}>
                    <ScrollView contentContainerStyle={stylesforTaskModal.scrollContainer}>
                        <Text style={stylesforTaskModal.header}>Section Name:</Text>
                        <TextInput
                            placeholder="Section Name"
                            placeholderTextColor="gray"
                            value={sectionName}
                            onChangeText={setSectionName}
                            style={stylesforTaskModal.input}
                        />

                        <Text style={stylesforTaskModal.header}>Task Name:</Text>
                        <TextInput
                            placeholder="Task Name"
                            placeholderTextColor="gray"
                            value={taskName}
                            onChangeText={setTaskName}
                            style={stylesforTaskModal.input}
                        />

                        <Text style={stylesforTaskModal.header}>Tags:</Text>
                        <TextInput
                            placeholder="Tags (comma separated)"
                            placeholderTextColor="gray"
                            value={tags}
                            onChangeText={setTags}
                            style={stylesforTaskModal.input}
                        />

                        <Text style={stylesforTaskModal.header}>Due Date:</Text>
                        <TextInput
                            placeholder="Due Date (DD-MM-YYYY)"
                            placeholderTextColor="gray"
                            value={formatDate(dueDate)}
                            onFocus={() => setShowDatePicker(true)}
                            style={stylesforTaskModal.input}
                        />

                        {showDatePicker && (
                            <DateTimePicker
                                value={dueDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}

                        <Text style={stylesforTaskModal.header}>Task Assigned To:</Text>
                        <TextInput
                            placeholder="Assigned To"
                            placeholderTextColor="gray"
                            value={assignedTo}
                            onChangeText={setAssignedTo}
                            style={stylesforTaskModal.input}
                        />

                        <Text style={stylesforTaskModal.header}>Status:</Text>
                        <Picker
                            selectedValue={status}
                            style={stylesforTaskModal.picker}
                            onValueChange={(itemValue) => setStatus(itemValue)}
                        >
                            <Picker.Item label="Completed" value="completed" />
                            <Picker.Item label="In Progress" value="in progress" />
                            <Picker.Item label="On Hold" value="on hold" />
                        </Picker>

                        <View style={stylesforTaskModal.buttonContainer}>
                            <View style={stylesforTaskModal.button}>
                                <Button title="Save" onPress={handleSave} />
                            </View>
                            <View style={stylesforTaskModal.button}>
                                <Button title="Close" onPress={onClose} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default TaskModal;
