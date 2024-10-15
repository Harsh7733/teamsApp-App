import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { getSections } from '../../Services/sectionServices';
import { getTasks } from '../../Services/TaskService';
import TaskList from '../components/TaskList';

const TaskManager = () => {
    const [sections, setSections] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sectionResponse = await getSections();
                setSections(sectionResponse.data); // Assuming sections are in response.data

                const taskResponse = await getTasks();
                setTasks(taskResponse.data); // Assuming tasks are in response.data
            } catch (err) {
                setError('Failed to fetch data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <View>
            <TaskList tasks={tasks} />
        </View>
    );
};

export default TaskManager;
