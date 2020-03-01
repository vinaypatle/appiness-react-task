const initialState = {
    isAuth: false,
    validUser: {
        "username": "hruday@gmail.com",
        "password": 'hruday123'
    },
    users: [{
        "id": 1,
        "name": "test1",
        "age": "11",
        "gender": "male",
        "email": "test1@gmail.com",
        "phoneNo": "9415346313"
    },
    {
        "id": 2,
        "name": "test2",
        "age": "12",
        "gender": "male",
        "email": "test2@gmail.com",
        "phoneNo": "9415346314"
    },
    {
        "id": 3,
        "name": "test3",
        "age": "13",
        "gender": "male",
        "email": "test3@gmail.com",
        "phoneNo": "9415346315"
    },
    {
        "id": 4,
        "name": "test4",
        "age": "14",
        "gender": "male",
        "email": "test4@gmail.com",
        "phoneNo": "9415346316"
    },
    {
        "id": 5,
        "name": "test5",
        "age": "15",
        "gender": "male",
        "email": "test5@gmail.com",
        "phoneNo": "9415346317"
    },
    {
        "id": 6,
        "name": "test6",
        "age": "16",
        "gender": "male",
        "email": "test6@gmail.com",
        "phoneNo": "9415346318"
    }]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            const validUser = { ...state.validUser };
            const users = state.users.map(user => ({
                ...user
            }));
            return {
                validUser,
                users,
                isAuth: true
            };
        case 'LOGIN_FAILED':
            const validUser2 = { ...state.validUser };
            const users2 = state.users.map(user => ({
                ...user
            }));
            return {
                validUser: validUser2,
                users: users2,
                isAuth: false
            };
        default:
            return state;
    }
};

export default reducer;