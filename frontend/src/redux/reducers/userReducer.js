const initialState = {
    users: [],
    loading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null
            };
        case 'CREATE_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: false,
                error: null
            };
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user => user._id === action.payload._id ? action.payload : user),
                loading: false,
                error: null
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload),
                loading: false,
                error: null
            };
        default:
            return state;
    }
};

export default userReducer;