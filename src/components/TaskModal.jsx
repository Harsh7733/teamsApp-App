import React, { useState } from 'react';
import { View, Modal, Button, TextInput, StyleSheet, Text, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

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
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Text style={styles.header}>Section Name:</Text>
                        <TextInput
                            placeholder="Section Name"
                            placeholderTextColor="gray"
                            value={sectionName}
                            onChangeText={setSectionName}
                            style={styles.input}
                        />

                        <Text style={styles.header}>Task Name:</Text>
                        <TextInput
                            placeholder="Task Name"
                            placeholderTextColor="gray"
                            value={taskName}
                            onChangeText={setTaskName}
                            style={styles.input}
                        />

                        <Text style={styles.header}>Tags:</Text>
                        <TextInput
                            placeholder="Tags (comma separated)"
                            placeholderTextColor="gray"
                            value={tags}
                            onChangeText={setTags}
                            style={styles.input}
                        />

                        <Text style={styles.header}>Due Date:</Text>
                        <TextInput
                            placeholder="Due Date (DD-MM-YYYY)"
                            placeholderTextColor="gray"
                            value={formatDate(dueDate)}
                            onFocus={() => setShowDatePicker(true)}
                            style={styles.input}
                        />

                        {showDatePicker && (
                            <DateTimePicker
                                value={dueDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}

                        <Text style={styles.header}>Task Assigned To:</Text>
                        <TextInput
                            placeholder="Assigned To"
                            placeholderTextColor="gray"
                            value={assignedTo}
                            onChangeText={setAssignedTo}
                            style={styles.input}
                        />

                        <Text style={styles.header}>Status:</Text>
                        <Picker
                            selectedValue={status}
                            style={styles.picker}
                            onValueChange={(itemValue) => setStatus(itemValue)}
                        >
                            <Picker.Item label="Completed" value="completed" />
                            <Picker.Item label="In Progress" value="in progress" />
                            <Picker.Item label="On Hold" value="on hold" />
                        </Picker>

                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Save" onPress={handleSave} />
                            </View>
                            <View style={styles.button}>
                                <Button title="Close" onPress={onClose} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '90%',
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 20,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 20,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    input: {
        borderWidth: 1,
        color: 'black',
        padding: 10,
        marginVertical: 10,
        borderColor: 'gray',
        borderRadius: 5,
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
    },
    picker: {
        height: 50,
        width: '100%',
        marginVertical: 10,
        color: 'black',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    button: {
        marginHorizontal: 5,
    },
});

export default TaskModal;