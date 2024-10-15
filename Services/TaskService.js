import axios from 'axios';

// Base URL for API endpoints
const API_URL = 'http://localhost:8080/tasks';

// Fetch all tasks
export const getTasks = () => axios.get(API_URL);

// Fetch tasks for a specific section
export const getTasksBySection = (sectionId) => axios.get(`${API_URL}/section/${sectionId}`);

// Fetch tasks without a section
export const getTasksWithoutSection = () => axios.get(`${API_URL}/section/null`);

// Save a new task
export const saveTask = (task) => axios.post(API_URL, task);

// Fetch completed tasks
export const getCompletedTasks = () => axios.get(`${API_URL}/status/completed`);

// Update an existing task
export const updateTask = async (task) => {
    try {
        const response = await axios.put(`${API_URL}/${task.id}`, task);
        return response.data; // Return the updated task
    } catch (error) {
        console.error('Failed to update task:', error.response ? error.response.data : error.message);
        throw error; // Rethrow error to be handled by the caller
    }
};

// Delete a task (soft delete)
export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${API_URL}/tasks/${taskId}`);
        return response.data; // Return the success message
    } catch (error) {
        console.error('Failed to delete task:', error.response ? error.response.data : error.message);
        throw error; // Rethrow error to be handled by the caller
    }
};

// Delete a task permanently
export const deleteTaskPermanently = async (taskId) => {
    try {
        const response = await axios.delete(`${API_URL}/deletePermanently/${taskId}`);
        return response.data; // Return the success message
    } catch (error) {
        console.error('Failed to delete task:', error.response ? error.response.data : error.message);
        throw error; // Rethrow error to be handled by the caller
    }
};

// Fetch tasks assigned to a user
export const getAssignedTasks = (userId) => axios.get(`${API_URL}/assignedTasks/${userId}`);

// Fetch deleted tasks
export const getDeletedTasks = () => axios.get(`${API_URL}/tasks/bin`);

// Fetch nondeleted noncompleted tasks
export const getNonDeletedNonCompletedTasks = () => axios.get(`${API_URL}/nonCompleted/nonDeleted`);

// Restore a deleted task
export const restoreTask = async (taskId) => {
    try {
        const response = await axios.post(`${API_URL}/tasks/bin/${taskId}/restore`);
        return response.data; // Return the success message
    } catch (error) {
        console.error('Failed to restore task:', error.response ? error.response.data : error.message);
        throw error; // Rethrow error to be handled by the caller
    }
};

//Send Task To QA
export const sendToQA = async (taskId) => {
    try {
        const response = await axios.put(`${API_URL}/sendToQA/${taskId}`);
        return response.data; // Return the success message
    } catch (error) {
        console.error('Failed to send task to QA:', error.response ? error.response.data : error.message);
        throw error; // Rethrow error to be handled by the caller
    }
};