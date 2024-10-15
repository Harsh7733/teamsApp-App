import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TaskList = ({ tasks }) => {
    const [collapsedSections, setCollapsedSections] = useState({});

    const toggleSection = (sectionName) => {
        setCollapsedSections((prevState) => ({
            ...prevState,
            [sectionName]: !prevState[sectionName],
        }));
    };

    // Group tasks by section name
    const groupedTasks = tasks.reduce((acc, task) => {
        acc[task.sectionName] = acc[task.sectionName] || [];
        acc[task.sectionName].push(task);
        return acc;
    }, {});

    return (
        <View>
            {Object.keys(groupedTasks).map((sectionName) => (
                <View key={sectionName}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{sectionName}</Text>
                        <TouchableOpacity onPress={() => toggleSection(sectionName)}>
                            <Icon
                                name={collapsedSections[sectionName] ? 'chevron-down' : 'chevron-up'}
                                size={20}
                                color="#ffffff"
                            />
                        </TouchableOpacity>
                    </View>
                    <Collapsible collapsed={!collapsedSections[sectionName]}>
                        <View>
                            {groupedTasks[sectionName].map((task, index) => (
                                <View key={index} style={styles.taskContainer}>
                                    <Text style={styles.task}>Task: {task.taskName}</Text>
                                    <Text>Due: {task.dueDate}</Text>
                                    <Text>Assigned To: {task.assignedTo}</Text>
                                    <Text>Status: {task.status}</Text>
                                    <Text>Tags: {task.tags.join(', ')}</Text>
                                </View>
                            ))}
                        </View>
                    </Collapsible>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    task: {
        fontSize: 16,
    },
});

export default TaskList;