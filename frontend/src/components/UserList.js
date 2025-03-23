import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser, createUser } from '../redux/actions/userActions';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users || []);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        const loadUsers = async () => {
            try {
                setLoading(true);
                setError(null);
                await dispatch(fetchUsers());
            } catch (err) {
                setError(`Failed to load users: ${err.message}`);
                console.error('Error loading users:', err);
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
    }, [dispatch]);

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            await dispatch(createUser(newUser));
            // Clear form
            setNewUser({ name: '', email: '', password: '' });
            // Refresh user list
            dispatch(fetchUsers());
        } catch (err) {
            setError(`Failed to create user: ${err.message}`);
        }
    };

    const handleInputChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    if (loading) {
        return <div className="loading">Loading users...</div>;
    }

    if (error) {
        return (
            <div className="error-message">
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    return (
        <div className="user-list">
            <div className="create-user-form">
                <h2>Create New User</h2>
                <form onSubmit={handleCreateUser}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={newUser.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={newUser.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={newUser.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Create User</button>
                </form>
            </div>

            <div className="users-list">
                <h2>Users</h2>
                {users.length === 0 ? (
                    <p>No users found</p>
                ) : (
                    users.map(user => (
                        <div key={user._id} className="user-item">
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <button onClick={() => dispatch(deleteUser(user._id))}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default UserList;    