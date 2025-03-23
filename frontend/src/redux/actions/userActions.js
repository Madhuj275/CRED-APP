import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
    try {
        const response = await axios.post('/api/users');
        dispatch({ type: 'FETCH_USERS', payload: response.data });
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const createUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/users/create', userData);
        dispatch({ type: 'CREATE_USER', payload: response.data.user });
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const updateUser = (id, userData) => async (dispatch) => {
    try {
        const response = await axios.post(`/api/users/update/${id}`, userData);
        dispatch({ type: 'UPDATE_USER', payload: response.data.user });
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await axios.post(`/api/users/delete/${id}`);
        dispatch({ type: 'DELETE_USER', payload: id });
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};